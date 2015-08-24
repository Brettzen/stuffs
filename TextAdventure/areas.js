var currentArea;
var person1;
var person2;
var person3;
var person4;
var person5;
var obj1;
var obj2;
var obj3;
var obj4;
var obj5;
var obj6;
var obj7;
var obj8;
var self;
var event1;
var event2;
var event3;
var event4;
var event5;
var event6;
var event7;
var event8;
var event9;
var event10;
var lookText;
//0.Object, 1.Look, 2.Use, 3.Open, 4.Get, 5. Move

unknownResponse = "I don't understand. What is it you're wanting to do?";

update = function() {
	console.log('update');
	if(currentArea = "krisRoom") {
		lookText = "You <span class='commands'>look</span> around the small, parsely furnished room. You see two child-sized <span class='objects'>beds</span> in very poor condition. Across the room is a <span class='objects'>door</span> leading to the hallway. All the walls are bare, save for one small <span class='objects'>window</span> and a single framed <span class='objects'>portrait</span> of a large and rather stern looking woman. The <span class='objects'>floor</span> creaks lightly as you shift your feet.";	
		obj1 = [
			"beds", 
			"You see two child-sized <span class='objects'>beds</span>. They are in very, VERY poor condition. One is yours. The other has been empty for as long as you can remember.",
			"This is no time to sleep. Focus!",
			unknownResponse,
			"You can't get that.",
			"You can't move that."
		
		];
		obj2 = [
			"floor",
			"You look down at the floor. It is dusty, stained and OLD. There is a <span class='objects'>loose board</span> that creaks when you step on it.",
			unknownResponse,
			unknownResponse,
			"You can't get that.",
			unknownResponse
		];
		if(event3) {
			obj3 = [
				"door",
				"You look at the door. It is, like everything else, old. The door is now unlocked.",
				"You open the door and cautiously step out into the hallway.",
				"You open the door and cautiously step out into the hallway.",
				"You can't get that.",
				unknownResponse
			];
		} else { 
			obj3 = [
				"door",
				"You look at the door. It is, like everything else, old. There is a small, slightly rusted <span class='objects'>keyhole</span> underneath the doorknob.",
				"The door is locked.",
				"The door is locked.",
				"You can't get that.",
				unknownResponse
			];
		}
		obj4 = [
			"keyhole",
			"You peer inside the keyhole. Yep. It's a <span class='objects'>keyhole</span>.",
			"What do you want to do with the <span class='objects'>keyhole</span>?",
			unknownResponse,
			"You can't get that.",
			"You can't move the keyhole."
		];
		if(event1 && !getBokken) {
			obj5 = [
				"bokken",
				"It's a wooden sword, your one and only possession.",
				unknownResponse,
				"You don't have it.",
				"You grab the <span class='items'>bokken</span>.",
				unknownResponse
			];
		} else {
			obj5 = [
				"ksdjfaksf"
			];
		}
		if(event1 && !getBokken) {
			obj6 = [
				"hole",
				"Inside the hole, you see a <span class='items'>bokken</span>.",
				unknownResponse,
				unknownResponse,
				"Are you serious? How do you expect to get a hole, exactly?",
				unknownResponse
			];
		} else if(getBokken) {
			obj6 = [
				"hole",
				"You see an empty hole where the <span class='objects'>floor board</span> used to be.",
				unknownResponse,
				unknownResponse,
				"Are you serious? How do you expect to get a hole, exactly?",
				unknownResponse
			]
		} else {
			obj6 = [
				"asdkfnaskldfbasdf"
			];
		}
		if(event1) {
			obj7 = [
				"loose board",
				"The <span class='objects'>loose board</span> lays on its side near the hole.",
				unknownResponse,
				"The board has already been moved.",
				"The board has already been moved.",
				"The board has already been moved."
			];
		} else {
			obj7 = [
				"loose board",
				"There is a <span class='objects'>loose board</span> in the floor that creaks slightly when you step on it.",
				unknownResponse,
				"You wedge your fingers into the floor and lift up the loose board to reveal a small hole in the floor. Inside the hole, you see a <span class='items'>bokken</span>.",
				"You wedge your fingers into the floor and lift up the loose board to reveal a small hole in the floor. Inside the hole, you see a <span class='items'>bokken</span>.",
				"You wedge your fingers into the floor and lift up the loose board to reveal a small hole in the floor. Inside the hole, you see a <span class='items'>bokken</span>."
		 	];
		}
		obj8 = [
			"window",
			"The <span class='objects'>window</span> is no longer see-through due to all of the grime and dust. Sturdy, iron <span class='objects'>bars</span> ruin any hopes of escaping through the window.",
			"Iron <span class='objects'>bars</span> block you from accessing the window.",
			"Iron <span class='objects'>bars</span> block you from accessing the window.",
			"You can't get that.",
			unknownResponse,
		];
		obj9 = [
			"bars",
			"The iron <span class='objects'>bars</span> are old, yet very strong. You know. You've checked.",
			unknownResponse,
			"The <span class='objects'>bars</span> don't open. Nice try.",
			"You can't get that.",
			"Mustering all of your strength, you grab hold of the iron <span class='objects'>bars</span> and violently pull. You fall backwards, landing with a thud on the dusty ground. The <span class='objects'>bars</span> are still holding strong to the window, however they now know not to mess with you, lest they incur your mighty wrath. Well done!"
		];
		if(!getPin) {
			obj10 = [
				"portrait",
				"You inspect the <span class='objects'>portrait</span>. It is a picture of a very large, very stern looking woman wearing a nun's habit. Her scowling glare appears to follow you as you.",
				unknownResponse,
				unknownResponse,
				"The <span class='objects'>portrait</span> is much too bulky and hideous to take with you.",
				"You tilt the <span class='objects'>portrait</span>, revealing a small, metal <span class='items'>pin</span> partially lodged inside of the wall."
			];
		} else {
			obj10 = [
				"portrait",
				"You inspect the <span class='objects'>portrait</span>. It is a picture of a very large, very stern looking woman wearing a nun's habit. Her scowling glare appears to follow you as you move about the room.",
				unknownResponse,
				unknownResponse,
				"The <span class='objects'>portrait</span> is much too bulky and hideous to take with you.",
				"You tilt the <span class='objects'>portrait</span>, but there is nothing of interest behind it."
			];
		}
		if(event2 && !getPin) {
			obj11 = [
				"pin",
				"You see a small, metal <span class='items'>pin</span> partially lodged in the wall.",
				"You don't have it.",
				unknownResponse,
				"You take the <span class='items'>pin</span>.",
				unknownResponse			
			];
		} else {
			obj11 = [
				"wmolcmnasf"
			];
		}
	} else if(currentArea = "hallway") {
		lookText = "It's the end. Stop <span class='commands'>look</span>ing.";
	} else {
		lookText = "WHERE ARE YOU?!?!?!?!";
	}
}
