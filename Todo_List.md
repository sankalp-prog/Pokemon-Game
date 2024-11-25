## Step 5: Snapping to a Grid

- Resize your pics to a square, like 150x150 px. If they're rectangular, you'll need to center them in a square div.
- Have your players walk 150px at a time, and have them start at a common origin.

Now your players will move along a grid, similar to Pokémon on GameBoy. It'll be easier for the player to control and for you to place elements and add interactions to the 2D world.

---

## Step 6: World-Building

- On the server, add some wall elements, like trees, water, and log fences. The frontend renders these as just repeating elements, sized to occupy 150x150 squares.
- Enforce that the user cannot occupy the same square as a wall.

Now your players will have to follow the path you set and see some nice scenery along the way. You could configure a maze, a town of houses, or a fenced-off Pokémon daycare/farm.

---

## Step 7: Battling NPCs

- Configure some squares to have an NPC on the server. Walking up directly to the square in front of them will open the battle panel on top of the grid (aka 2D world).
- Configure each NPC on the server to have some Pokémon, as well as your player. Each Pokémon will have:
  - An image
  - A name
  - An element type
  - HP
  - Moves (with an element type, and more details)

**Monster Slayer!!!**

Now your players can have Pokémon battles with NPCs! However, they can't collect Pokémon, experience, or money. Even if you added an inventory with those features, restarting the server would delete their progress. You need a database.

---

## Step 8: Player-Centric

- Don't move your player—move the grid instead. Your player should remain in the center of the screen, unable to walk off-screen.

Now you can expand your world even further.

---

## Step 9: Multiplayer Performance

- **Syncing remote players' positions:** 1000 ms (1 fps) is prohibitively slow, especially on a slow connection. To avoid this 1-second downtime:
  - Remove `setInterval(myFunc, 1000)`.
  - Instead, use `setTimeout(myFunc, 16)` for 60 fps, assuming instant network conditions.
- **Performance optimization:** On an instant connection (e.g., working locally), this can unnecessarily consume CPU. To mitigate this:
  - Add throttling by counting how many requests ran in the past second.
  - Skip requests for the remainder of the second if a threshold is crossed.
  - Increment the wait time from 16 ms each second until the threshold is no longer crossed.
  - Explore other strategies as needed.

---

## Step 10: Database Setup

- Set up a SQL database to persist the users' progress.

---

## Next Steps

Once all of this is in place and the game is deployable, you can take it in any direction you want:
- Build out the world.
- Enhance the battle experience.
- Add more Pokémon.
- Develop the core loop:
  - Win battles → Earn money → Win harder battles.
