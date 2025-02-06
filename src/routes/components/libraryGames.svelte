<script>
export let items
</script>
<library>
    <div class="gameHolder">
        {#each items as item,i}
           <div class="games w-45">
              <img alt="" src="{items.img}">
              <div class="text">{items.gameTime}</div>
              <div class="gameName">{items.name}</div>
              <div class="friendsPlaying">{items.friends}</div>
           </div>
           <div class="{i%2===0 ? 'w-10' : ''}"></div>
        {/each}
      </div>
</library>
