<script>
  import { onDestroy } from 'svelte';
    import countStores from './stores/count.store';
    const unsubscribe = countStores.subscribe(value => {
        console.log(value, 'count store');
    });

    setTimeout(() => {
        countStores.update(value => {
            return value + 300
        });
    }, 1000);

    onDestroy(() => {
        unsubscribe();
    });

</script>

<h1>{$countStores}</h1>