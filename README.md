# Project1Dev
Game: https://jmwalsh91.github.io/Project1Dev/index.html

Repo: https://github.com/jmwalsh91/Project1Dev

Inspiration & Intent
========================

This game was made as a project for General Assembly's Software Engineering Immersive. I chose to develop a game modeled on early text-adventure games, loosely on the experience of playing a MUD (Multi-User Dungeon) game, while utilizing some of the tropes from old school survival-horror games. A fusion of the rulebooks and mechanics of table-top roleplaying games like Dungeons and Dragons, and early text-adventure computer games like Colossal Cave Adventure (gameplay picture below), early MUD development foreshadowed advances in natural language processing, text-parsing, and pioneered persistant-state games. Inspired by this, I chose to lay the groundwork for a project that

* I could return to and implement additional functionality/mechanics
* I could manually transpile into other languages to further my own education and familiarity with different programming languages
* Is structurally suited for massive updates, scaleable, and to some extent, modular. 

![ADVENT_--_Crowther_Woods](https://media.git.generalassemb.ly/user/39056/files/2148d580-4977-11ec-8202-ddd39c2af0e7)
^Image from Colossal Cave Adventure gameplay^

My project & Planning
===================

This project was built with Javascript, CSS, and HTML. The current iteration of the game can rightly be said to belong to the genre of "Interactive Fiction," in the tradition of proto-MUDs and CCA, which has the player navigating a map composed of ROOMS, each with unique descriptions, relationships to other ROOMS, objects, and NPCs (Non Playable Characters, or Non Player Characters). For my minimum-viable-product, I wanted to ensure that this basic functionality was included and obvious to anyone playing the game. The two original wireframes for the game outline the basic user interface as well as the general layout of the first version of the map.

![wireframe](https://media.git.generalassemb.ly/user/39056/files/8521cd00-497c-11ec-863a-fd1dd752678b)
![MAPmvp](https://media.git.generalassemb.ly/user/39056/files/94087f80-497c-11ec-9807-83089aea0dc2)

In the game, there are a handful of objects that the player can ADD to their inventory by clicking text stylized to indicate that it can be interacted with. Once the player has the item in their inventory, they can equip it so that it can be used on another object. There is one NPC with whom the player can have a conversation with (responses dependent on the conversation options that the player chooses). This NPC gives the player an object--a key--which must be used on a DOOR which appears once the conversation is over. This functionality is dependent on a STATE object which updates the map once certain conditions are met: first, whether or not the conversation with the NPC has taken place, and second, when the DOOR is UNLOCKED. Future iterations will update each room's description in regards to the game's current state.

In line with the outline of the map above, the current gameplay, from start to finish, is as follows

* Player "awakes" in the first room
* Player explores the map and interacts with objects
* Player finds the NPC, has a conversation, and is given a KEY.
* Player travels back to the original room, uses the key on the door, gains access to two new rooms. The "outside" room effectively ends the game.
* Currently, there are 26 Rooms, with three locations slated for expansion.

Instructions
====================
1: Clone this repo into a directory of your choosing on your computer. Source: https://github.com/jmwalsh91/Project1Dev
2: Open the index.html file (in Chrome or Firefox :p )

Gameplay Screenshots
======================

![firstscreen](https://media.git.generalassemb.ly/user/39056/files/134c8200-4982-11ec-899d-22c05d0e95de)
![conversationscreen](https://media.git.generalassemb.ly/user/39056/files/c9b06700-4982-11ec-9236-189b6491cce2)
Screenshot of conversation with NPC
![library2screen](https://media.git.generalassemb.ly/user/39056/files/1300b680-4983-11ec-90f4-2d8a05be98cc)
Screenshot of updated description of first room
![doorpromptscreen](https://media.git.generalassemb.ly/user/39056/files/5d823300-4983-11ec-9c93-e5b29ee4e64a)
Screenshot of game prompting player first to equip key, and then, upon equip, to use the key on the door
![foyerscreen](https://media.git.generalassemb.ly/user/39056/files/ac2fcd00-4983-11ec-906b-0ef9941afe9f)
Screenshot of room after door. Clicking "South" "wins" game.

Where to go from here?
==================
There are three locations that are set up to be modified to include access to more sections of the map: the foyer, the garden area "before a door," and the garden room with a "large wrought iron gate." I intend to use these areas initially to workshop different mechanics and gameplay elements, with the possibilities ranging from more in-depth and dynamic conversations (and "sentiment tracking"), puzzles, weather effects sourced from a weather API, and player-vs-enemy combat. Additionally, the procedural generation of rooms, and the subsequent automated population of objects, is of great interest to me. First up, however, would be buffing up the game's concept of "state" and updating room descriptions en-masse dependent on a slew of conditions. 
