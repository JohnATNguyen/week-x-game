// define main function that renders at page load, and also when restart button is pressed
function main() {

	// set/reset variables
	var list1 = [
		turtles = {
			id: "turtles",
			nameAndAlt: "One of the Turtles",
			imageLink: "assets/images/Teenage_Mutant_Ninja_Turtles_(Kevin_Eastman's_art).jpg", // need escape \ before the ' ???
			hitPoints: 200,
			attackPower: 5
		},
		splinter = {
			id: "splinter",
			nameAndAlt: "Master Splinter",
			imageLink: "assets/images/Splinter_(David_Petersen's_art).jpg", // need escape \ before the ' ???
			hitPoints: 150,
			attackPower: 15
		},
		april = {
			id: "april",
			nameAndAlt: "April O'Neil",
			imageLink: "assets/images/April_O'Neil_(character).jpg", // need escape \ before the ' ???
			hitPoints: 175,
			attackPower: 10
		},
		shredder = {
			id: "shredder",
			nameAndAlt: "The Shredder",
			imageLink: "assets/images/TMNTShredderComic.jpg",
			hitPoints: 125,
			attackPower: 20
		}
	]
	var list2 = list1;
	var list3 = list2;
	var list4 = list3;
	var characterBootstrapClass = "characts col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3";
	var canPickCharacter = true;
	var canPickEnemy = false;
	var canAttackDefender = false;
	var attackCounter = 0;

	// create, addClass, html, and append div's for each of the characters and put Notes: select a character
	$('#selectcharacter').html('<h3><em>Select a Character:</em></h3>');

	for (var i = 0, n = list1.length; i < n; i++) {
		$('#selectcharacter').append('<div ' + 'id="' + list1[i].id + '" class="' + characterBootstrapClass + '"><p>' + list1[i].nameAndAlt + '</p><img src="' + list1[i].imageLink + '" alt="' + list1[i].nameAndAlt + '"><p>HP (Hit Points): ' + list1[i].hitPoints + '</p></div>');
	}

	$('#currentcharacter').html('<h3><em>Current Character:</em></h3>');
	$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
	$('#currentdefender').html('<h3><em>Current Defender:</em></h3>');
	$('#gameupdates').html('<h3><em>Game Updates: </em><span>Please select a character.</span></h3>');

	// user clicks a character
	if (canPickCharacter) {
		$('#turtles').on('click', function() {
			canPickCharacter = false;
			canPickEnemy = true;
			list2 = list1.splice(1, 3);
			$('#selectcharacter').html('');
			$('#currentcharacter').html('<h3><em>Current Character:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list1[0].nameAndAlt + '</p><img src="' + list1[0].imageLink + '" alt="' + list1[0].nameAndAlt + '"><p>HP (Hit Points): ' + list1[0].hitPoints + '</p></div>');
			for (var i = 0, n = list2.length; i < n; i++) {
				$('#enemiestoselectfrom').append('<div ' + 'id="' + list2[i].id + '" class="' + characterBootstrapClass + '"><p>' + list2[i].nameAndAlt + '</p><img src="' + list2[i].imageLink + '" alt="' + list2[i].nameAndAlt + '"><p>HP (Hit Points): ' + list2[i].hitPoints + '</p></div>');
			$('#gameupdates').html('<h3><em>Game Updates: <span>Please select an enemy.</span></em></h3>');
			}
			if (canPickEnemy) {
				$('#splinter').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(1, 2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');					
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
					if (canAttackDefender) {
						$('.btn-danger').on('click', function() {
							// defender's hitPoints decrement by character's attackpower
							// Notes: your character dealt x damage
							if (defender hitPoints <= 0) {
								if currentEnemiesLeft > 0 {
									canPickEnemy = true;
									canAttackDefender = false;
									Notes: You defeated the defender. Pick another one from the your list of enemies.
									attackCounter++;
									// character attackpower increases by multiplying attackpower and attackCounter
								}
								else if currentEnemiesLeft = 0 {
									canAttackDefender = false;
									Notes: youve won! Press restart to play again.
									play cowabunga
								}

							}
							else if (defender hitPoints > 0) {
								// character hitPoints decrement by defender's attackpower
								// Notes: your defender dealt x damage
								if (character hitPoints > 0) {
									attackCounter++;
									// character attackpower increases by multiplying attackpower and attackCounter
								}
								else if (character hitPoints <= 0) {
									canAttackDefender = false;
									Notes: youve lost! Press restart to play again.
								}
							}
						});
					}
				});
				$('#april').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = $.merge(list2.splice(0, 1), list2.splice(1, 1));
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#shredder').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(0,2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
			}
		});
		$('#splinter').on('click', function() {
			canPickCharacter = false;
			canPickEnemy = true;
			$('#selectcharacter').html('');
			$('#currentcharacter').html('<h3><em>Current Character:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list1[1].nameAndAlt + '</p><img src="' + list1[1].imageLink + '" alt="' + list1[1].nameAndAlt + '"><p>HP (Hit Points): ' + list1[1].hitPoints + '</p></div>');
			list2 = $.merge(list1.splice(0, 1), list1.splice(1, 2));
			for (var i = 0, n = list2.length; i < n; i++) {
				$('#enemiestoselectfrom').append('<div ' + 'id="' + list2[i].id + '" class="' + characterBootstrapClass + '"><p>' + list2[i].nameAndAlt + '</p><img src="' + list2[i].imageLink + '" alt="' + list2[i].nameAndAlt + '"><p>HP (Hit Points): ' + list2[i].hitPoints + '</p></div>');
			$('#gameupdates').html('<h3><em>Game Updates: <span>Please select an enemy.</span></em></h3>');
			}
			if (canPickEnemy) {
				$('#turtles').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(1, 2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');					
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#april').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = $.merge(list2.splice(0, 1), list2.splice(1, 1));
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#shredder').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(0,2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
			}
		});
		$('#april').on('click', function() {
			canPickCharacter = false;
			canPickEnemy = true;
			$('#selectcharacter').html('');
			$('#currentcharacter').html('<h3><em>Current Character:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list1[2].nameAndAlt + '</p><img src="' + list1[2].imageLink + '" alt="' + list1[2].nameAndAlt + '"><p>HP (Hit Points): ' + list1[2].hitPoints + '</p></div>');
			list2 = $.merge(list1.splice(0, 2), list1.splice(1, 1));
			for (var i = 0, n = list2.length; i < n; i++) {
				$('#enemiestoselectfrom').append('<div ' + 'id="' + list2[i].id + '" class="' + characterBootstrapClass + '"><p>' + list2[i].nameAndAlt + '</p><img src="' + list2[i].imageLink + '" alt="' + list2[i].nameAndAlt + '"><p>HP (Hit Points): ' + list2[i].hitPoints + '</p></div>');
			$('#gameupdates').html('<h3><em>Game Updates: <span>Please select an enemy.</span></em></h3>');
			}
			if (canPickEnemy) {
				$('#turtles').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(1, 2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');					
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#splinter').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = $.merge(list2.splice(0, 1), list2.splice(1, 1));
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#shredder').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(0,2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
			}
		});
		$('#shredder').on('click', function() {
			canPickCharacter = false;
			canPickEnemy = true;
			$('#selectcharacter').html('');
			$('#currentcharacter').html('<h3><em>Current Character:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list1[3].nameAndAlt + '</p><img src="' + list1[3].imageLink + '" alt="' + list1[3].nameAndAlt + '"><p>HP (Hit Points): ' + list1[3].hitPoints + '</p></div>');
			list2 = list1.splice(0, 3);
			for (var i = 0, n = list2.length; i < n; i++) {
				$('#enemiestoselectfrom').append('<div ' + 'id="' + list2[i].id + '" class="' + characterBootstrapClass + '"><p>' + list2[i].nameAndAlt + '</p><img src="' + list2[i].imageLink + '" alt="' + list2[i].nameAndAlt + '"><p>HP (Hit Points): ' + list2[i].hitPoints + '</p></div>');
			$('#gameupdates').html('<h3><em>Game Updates: <span>Please select an enemy.</span></em></h3>');
			}
						if (canPickEnemy) {
				$('#turtles').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(1, 2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');					
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#splinter').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = $.merge(list2.splice(0, 1), list2.splice(1, 1));
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
				$('#april').on('click', function() {
					canPickEnemy = false;
					canAttackDefender = true;
					list3 = list2.splice(0,2);
					$('#currentdefender').html('<h3><em>Current Defender:</em></h3><div class="' + characterBootstrapClass + '"><p>' + list2[0].nameAndAlt + '</p><img src="' + list2[0].imageLink + '" alt="' + list2[0].nameAndAlt + '"><p>HP (Hit Points): ' + list2[0].hitPoints + '</p></div>');
					$('#enemiestoselectfrom').html('<h3><em>Enemies to Select From:</em></h3>');
					for (var i = 0, n = list3.length; i < n; i++) {
						$('#enemiestoselectfrom').append('<div ' + 'id="' + list3[i].id + '" class="' + characterBootstrapClass + '"><p>' + list3[i].nameAndAlt + '</p><img src="' + list3[i].imageLink + '" alt="' + list3[i].nameAndAlt + '"><p>HP (Hit Points): ' + list3[i].hitPoints + '</p></div>');
					}
					$('#gameupdates').html('<h3><em>Game Updates: <span>Attack your enemy!</span></em></h3>');
				});
			}
		});
	}
}

main();