import { writable } from 'svelte/store';

const store = writable(1)


export default {
    subscribe: store.subscribe,
    addOne: () => store.update(n => n + 1),
    minusOne: () => store.update(n => n - 1),
    multiplyOne: () => store.update(n => n * 3),

    set: (n) => { n > 0 ? store.set(n) : store.set(0) },
};