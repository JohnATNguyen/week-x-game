// "* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ."
// use more updated pictures???

// set global variables, and functions
var wins = 0;
var losses = 0;

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function main() {
	// set local variables
	var people = [
		turtles = {
			id: "turtles",
			nameAndAlt: "One of the Turtles",
			imageLink: "assets/images/Teenage_Mutant_Ninja_Turtles_(Kevin_Eastman's_art).jpg",
			hitPoints: randomNumber(1, 201),
			attackPoints: randomNumber(1, 6)
		},
		splinter = {
			id: "splinter",
			nameAndAlt: "Master Splinter",
			imageLink: "assets/images/Splinter_(David_Petersen's_art).jpg",
			hitPoints: randomNumber(1, 151),
			attackPoints: randomNumber(1, 16)
		},
		april = {
			id: "april",
			nameAndAlt: "April O'Neil",
			imageLink: "assets/images/April_O'Neil_(character).jpg",
			hitPoints: randomNumber(1, 176),
			attackPoints: randomNumber(1, 11)
		},
		shredder = {
			id: "shredder",
			nameAndAlt: "The Shredder",
			imageLink: "assets/images/TMNTShredderComic.jpg",
			hitPoints: randomNumber(1, 126),
			attackPoints: randomNumber(1, 21)
		}
	]
	var preSelectBootstrapClass = "characts col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
	var postSelectBootstrapClass = "characts col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9";
	var canPickAttacker = true;
	var canPickDefender = true;
	var canAttackDefender = true;
	var attackCounter = 0;
	var defenderLosses = 0;

	var cowabunga = new Audio('assets/tmnt-turtles-in-time-ost-cowabunga.mp3');

	//disable attack button (to be enabled later), so that it doesn't double up with each restart
	$('#attack').prop('disabled', true);

	// set up initial state
	$('#selectcharacter').html('<h3><em>Players to Select:</em></h3>');

	for (var i = 0, n = people.length; i < n; i++) {
		$('#selectcharacter').append('<div id="' + people[i].id + '" class="' + preSelectBootstrapClass + '" hitpoints="' + people[i].hitPoints + '" attackPoints="' + people[i].attackPoints + '"><p>' + people[i].nameAndAlt + '</p><p><img src="' + people[i].imageLink + '" alt="' + people[i].nameAndAlt + '"></p><p class="HP">HP (Hit Points): ' + people[i].hitPoints + '</p><p class="AP">AP (Attack Points): ' + people[i].attackPoints + '</p></div>');
	}

	$('#currentattacker').html('<h3><em>Current Attacker:</em></h3>');
	$('#currentdefender').html('<h3><em>Current Defender:</em></h3>');
	$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select an attacker.</span>');
	$('#winscolumn').html(wins);
	$('#lossescolumn').html(losses);

	// user clicks a character
	$('.characts').on('click', function() {
		if (canPickAttacker) {
			var attackerDiv = $(this);
			attackerDiv.removeClass(preSelectBootstrapClass).addClass('attacker ' + postSelectBootstrapClass);
			$('#currentattacker').append(attackerDiv);
			canPickAttacker = false;
			attackerId = $(this).attr('id')
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select a defender.</span>');
		}
		else if (canPickDefender && $(this).attr('id') != attackerId) {
			// add this stuff to remove "Select Character:" after the last character is selected???
			// if (defenderLosses == people.length - 2) {
			// 	$('#selectcharacter').empty();
			// }
			var defenderDiv = $(this);
			defenderDiv.removeClass(preSelectBootstrapClass).addClass('defender ' + postSelectBootstrapClass);
			$('#currentdefender').append(defenderDiv);
			canPickDefender = false;
			$('#attack').prop('disabled', false);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Attack the defender!</span>');
		}
	});

	// unbind attack button so that it doesn't double up with each restart
	$('#attack').unbind('click');

	// user clicks attack button
	$('#attack').on('click', function() {
		var attackerTotalAttack = parseInt($('.attacker').attr('attackPoints')) + parseInt($('.attacker').attr('attackPoints')*attackCounter);
		var defenderHitPoints = $('.defender').attr('hitpoints') - attackerTotalAttack;
		$('.defender').attr('hitpoints', defenderHitPoints);
		$('.defender').find('.HP').html('HP (Hit Points): ' + defenderHitPoints);
		attackCounter++;
		var attackerTotalAttackDisplay = parseInt($('.attacker').attr('attackPoints')) + parseInt($('.attacker').attr('attackPoints')*attackCounter);
		$('.attacker').find('.AP').html('AP (Attack Points): ' + attackerTotalAttackDisplay);
		var defenderTotalAttack = $('.defender').attr('attackPoints');
		var attackerHitPoints = $('.attacker').attr('hitpoints') - defenderTotalAttack;
		$('.attacker').attr('hitpoints', attackerHitPoints);
		$('.attacker').find('.HP').html('HP (Hit Points): ' + attackerHitPoints);
		$('#gameupdates').html('<h3><em>Game Updates: </em></h3>');
		$('#gameupdates').append('<span>You attacked the defender for ' + attackerTotalAttack + ' hitpoints!<br></span>');
		$('#gameupdates').append('<span>The defender counterattacked you for ' + defenderTotalAttack + ' hitpoints!</span>');
		if (defenderHitPoints <= 0) {
			defenderLosses++;
			if (defenderLosses == people.length - 1) {
				if (attackerHitPoints <= 0) {
					$('#attack').prop('disabled', true);
					$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You beat the last defender, but you also died! It\'s a draw!</span>');
				}
				else {
					wins++;
					$('#attack').prop('disabled', true);
					$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You\'ve won!</span>');
					$('#winscolumn').html(wins);
					cowabunga.play();
				}
			}
			else if (attackerHitPoints <= 0) {
				losses++;
				$('#attack').prop('disabled', true);
				$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You beat your last defender, but you also died!</span>');
				$('#lossescolumn').html(losses);
			}
			else {
				$('#currentdefender').html('<h3><em>Current Defender:</em></h3>');
				$('#attack').prop('disabled', true);
				$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select another defender.</span>');
				canPickDefender = true;
			}
		}
		else if (attackerHitPoints <= 0) {
			losses++;
			$('#attack').prop('disabled', true);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You\'ve lost!</span>');
			$('#lossescolumn').html(losses);
		}
	});
}

main();