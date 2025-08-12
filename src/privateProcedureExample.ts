import { z } from 'zod';
import { TRPCError, initTRPC } from '@trpc/server';

// Mock context type
type Context = {
    user?: {
        id: string;
        name: string;
        role: string;
    };
};

// Initialize tRPC
const t = initTRPC.context<Context>().create();

// Middleware to check if user is authenticated
const isAuthenticated = t.middleware(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'You must be logged in to access this resource',
        });
    }
    return next({
        ctx: {
            user: ctx.user,
        },
    });
});

// Create protected procedure
const privateProcedure = t.procedure.use(isAuthenticated);

// Example private procedure
export const getUserProfile = privateProcedure
    .input(z.object({
        userId: z.string(),
    }))
    .query(({ ctx, input }) => {
        // ctx.user is guaranteed to exist due to middleware
        return {
            id: ctx.user.id,
            name: ctx.user.name,
            role: ctx.user.role,
            requestedUserId: input.userId,
        };
    });

// Example private mutation
export const updateUserProfile = privateProcedure
    .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
    }))
    .mutation(({ ctx, input }) => {
        // Simulate updating user profile
        return {
            success: true,
            user: {
                id: ctx.user.id,
                name: input.name,
                email: input.email,
                role: ctx.user.role,
            },
        };
    });