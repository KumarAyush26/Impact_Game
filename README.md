🕹 ImpactJS-Style 2D Platformer Game
Created using Weltmeister Level Editor & Custom JavaScript Logic
📌 Overview

This is a 2D platformer game built using the Weltmeister level editor for tile-based world design and JavaScript for gameplay mechanics such as movement, jumping, shooting, grenades, enemy AI, collision detection, and particle effects.

The project demonstrates the core concepts of game loops, entity-based architecture, input management, and tile-based collision inspired by the development process shown in the ImpactJS documentation/tutorials.

✨ Features

✔ Player movement (run, jump, fall)
✔ Shooting mechanic (bullets)
✔ Secondary weapon (grenade with explosion damage)
✔ Enemy with simple AI & health
✔ Particle-based explosion effects
✔ Tile-based level design using Weltmeister
✔ Basic UI elements such as health bar & weapon indicator
✔ Respawn system

🎮 Controls
Key	Action
← →	Move left / right
X	Jump
C	Shoot
TAB	Switch weapon
R	Respawn (if implemented)
🧱 Tools & Technology Used
Component	Details
Weltmeister	Level design engine for creating maps
JavaScript / Canvas	Main game logic and rendering
JSON level format	Exported level used in the game
Custom media assets	Player, zombie, bullet, grenade, tiles
📂 Project Structure (Example)
/ImpactJS-Style-Game
 ├── index.html
 ├── js/
 │   └── game.js
 ├── levels/
 │   └── level1.json
 ├── media/
 │   ├── player.png
 │   ├── zombie.png
 │   ├── bullet.png
 │   ├── grenade.png
 │   ├── blood.png
 │   └── tile.png
 └── README.md

🚀 How to Run the Game
Local Development

Use a local server (required for file/asset loading).

Python
python -m http.server 8000


Open in browser:

http://localhost:8000

Node.js
npx http-server

📦 Future Improvements

Add background music & sound effects

Add multiple levels & transitions

Implement main menu & game over screens

Improve enemy pathfinding AI

Add animations for jump & fall states

Add scoring system and collectibles
