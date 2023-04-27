import { derived, writable } from 'svelte/store';

export const storeOne = writable(2)
export const storeTwo = writable(1)

export const storeSumEven = derived([storeOne, storeTwo], ([storeOneValue, storeTwoValue]) => {
    return (storeOneValue + storeTwoValue) % 2 === 0 ? 'even' : 'odd'
})

export const storeOneEven = derived(storeOne, (storeOneVal, set) => {
    set(storeOneVal % 2 === 0)
})