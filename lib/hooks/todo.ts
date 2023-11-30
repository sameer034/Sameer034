/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateTodo() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Todo', metadata);

    /** @deprecated Use `useCreateTodo` hook instead. */
    async function createTodo<T extends Prisma.TodoCreateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>) {
        return await request.mutationRequest<Prisma.TodoGetPayload<Prisma.TodoCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/todo/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useCreateManyTodo` hook instead. */
    async function createManyTodo<T extends Prisma.TodoCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'POST',
            `${endpoint}/todo/createMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpdateTodo` hook instead. */
    async function updateTodo<T extends Prisma.TodoUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>) {
        return await request.mutationRequest<Prisma.TodoGetPayload<Prisma.TodoUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/todo/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyTodo` hook instead. */
    async function updateManyTodo<T extends Prisma.TodoUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/todo/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertTodo` hook instead. */
    async function upsertTodo<T extends Prisma.TodoUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>) {
        return await request.mutationRequest<Prisma.TodoGetPayload<Prisma.TodoUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/todo/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteTodo` hook instead. */
    async function deleteTodo<T extends Prisma.TodoDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>) {
        return await request.mutationRequest<Prisma.TodoGetPayload<Prisma.TodoDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/todo/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyTodo` hook instead. */
    async function deleteManyTodo<T extends Prisma.TodoDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/todo/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createTodo, createManyTodo, updateTodo, updateManyTodo, upsertTodo, deleteTodo, deleteManyTodo };
}

export function useCreateTodo(
    options?: MutationOptions<Prisma.TodoGetPayload<Prisma.TodoCreateArgs> | undefined, unknown, Prisma.TodoCreateArgs>,
) {
    const mutation = request.useModelMutation('Todo', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoCreateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.TodoGetPayload<T> | undefined>;
        },
    };
}

export function useCreateManyTodo(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoCreateManyArgs>) {
    const mutation = request.useModelMutation('Todo', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useFindManyTodo<T extends Prisma.TodoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
    options?: QueryOptions<Array<Prisma.TodoGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Todo', 'findMany', args, options);
}

export function useInfiniteFindManyTodo<T extends Prisma.TodoFindManyArgs, R extends Array<Prisma.TodoGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.TodoFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.TodoGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Todo', 'findMany', getNextArgs, options);
}

export function useFindUniqueTodo<T extends Prisma.TodoFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
    options?: QueryOptions<Prisma.TodoGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Todo', 'findUnique', args, options);
}

export function useFindFirstTodo<T extends Prisma.TodoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
    options?: QueryOptions<Prisma.TodoGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Todo', 'findFirst', args, options);
}

export function useUpdateTodo(
    options?: MutationOptions<Prisma.TodoGetPayload<Prisma.TodoUpdateArgs> | undefined, unknown, Prisma.TodoUpdateArgs>,
) {
    const mutation = request.useModelMutation('Todo', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.TodoGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyTodo(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoUpdateManyArgs>) {
    const mutation = request.useModelMutation('Todo', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertTodo(
    options?: MutationOptions<Prisma.TodoGetPayload<Prisma.TodoUpsertArgs> | undefined, unknown, Prisma.TodoUpsertArgs>,
) {
    const mutation = request.useModelMutation('Todo', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.TodoGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteTodo(
    options?: MutationOptions<Prisma.TodoGetPayload<Prisma.TodoDeleteArgs> | undefined, unknown, Prisma.TodoDeleteArgs>,
) {
    const mutation = request.useModelMutation('Todo', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.TodoGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyTodo(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoDeleteManyArgs>) {
    const mutation = request.useModelMutation('Todo', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger<T extends Prisma.TodoDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>) {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateTodo<T extends Prisma.TodoAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
    options?: QueryOptions<Prisma.GetTodoAggregateType<T>>,
) {
    return request.useModelQuery('Todo', 'aggregate', args, options);
}

export function useGroupByTodo<
    T extends Prisma.TodoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Todo', 'groupBy', args, options);
}

export function useCountTodo<T extends Prisma.TodoCountArgs>(
    args?: Prisma.Subset<T, Prisma.TodoCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Todo', 'count', args, options);
}
