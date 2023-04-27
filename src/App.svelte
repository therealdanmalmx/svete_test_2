<script>
    import { storeOne, storeTwo, storeSumEven, storeOneEven} from './stores/derived.store';
</script>

<h2>Sum of store is: {$storeSumEven}</h2>

<h3>Store One: {$storeOne}</h3>
<input type="range" bind:value={$storeOne} min="0" max="10">

<h3>Store Tqo {$storeTwo}</h3>
{$storeTwo}
<input type="range" bind:value={$storeTwo} min="0" max="10">
<h3>Store One Value {$storeOneEven}</h3>