// "* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ."

var wins = 0;
var losses = 0;

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function main() {
	// set variables
	var people = [
		turtles = {
			id: "turtles",
			nameAndAlt: "One of the Turtles",
			imageLink: "assets/images/Teenage_Mutant_Ninja_Turtles_(Kevin_Eastman's_art).jpg",
			hitPoints: randomNumber(1, 201),
			attackPower: randomNumber(1, 6)
		},
		splinter = {
			id: "splinter",
			nameAndAlt: "Master Splinter",
			imageLink: "assets/images/Splinter_(David_Petersen's_art).jpg",
			hitPoints: randomNumber(1, 151),
			attackPower: randomNumber(1, 16)
		},
		april = {
			id: "april",
			nameAndAlt: "April O'Neil",
			imageLink: "assets/images/April_O'Neil_(character).jpg",
			hitPoints: randomNumber(1, 176),
			attackPower: randomNumber(1, 11)
		},
		shredder = {
			id: "shredder",
			nameAndAlt: "The Shredder",
			imageLink: "assets/images/TMNTShredderComic.jpg",
			hitPoints: randomNumber(1, 126),
			attackPower: randomNumber(1, 21)
		}
	]
	for (var i = 0, n = people.length; i < n; i++) {
		console.log([i] + ': ' + people[i].attackPower);
	}
	var characterBootstrapClass = "characts col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3";
	var canPickAttacker = true;
	var canPickDefender = true;
	var canAttackDefender = true;
	var attackCounter = 0;
	var defenderLosses = 0;

	var cowabunga = new Audio('assets/tmnt-turtles-in-time-ost-cowabunga.mp3');

	$('#attack').prop('disabled', true);

	// create, addClass, html, and append div's for each of the characters and put Notes: select a character
	$('#selectcharacter').html('<h3><em>Players to Select:</em></h3>');

	for (var i = 0, n = people.length; i < n; i++) {
		$('#selectcharacter').append('<div ' + 'id="' + people[i].id + '" class="characts col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3" hitpoints="' + people[i].hitPoints + '" attackpower="' + people[i].attackPower + '"><p>' + people[i].nameAndAlt + '</p><img src="' + people[i].imageLink + '" alt="' + people[i].nameAndAlt + '"><p class="HP">HP (Hit Points): ' + people[i].hitPoints + '</p></div>');
	}

	$('#currentcharacter').html('<h3><em>Current Attacker:</em></h3>');
	$('#currentdefender').html('<h3><em>Current Defender:</em></h3>');
	$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select an attacker.</span>');
	$('#winscolumn').html(wins);
	$('#lossescolumn').html(losses);

	$('.characts').unbind('click');
	// user clicks a character
	$('.characts').on('click', function() {
		if (canPickAttacker) {
			var attackerDiv = $(this);
			attackerDiv.addClass('attacker');
			$('#currentcharacter').append(attackerDiv);
			canPickAttacker = false;
			attackerId = $(this).attr('id')
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select a defender.</span>');
		}
		else if (canPickDefender && $(this).attr('id') != attackerId) {
			var defenderDiv = $(this);
			defenderDiv.addClass('defender');
			$('#currentdefender').append(defenderDiv);
			canPickDefender = false;
			$('#attack').prop('disabled', false);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Attack the defender!</span>');
		}
	});

	$('#attack').unbind('click');
	$('#attack').on('click', function() {
		var attackerTotalAttack = parseInt($('.attacker').attr('attackPower')) + parseInt($('.attacker').attr('attackPower')*attackCounter);
		var defenderHitPoints = $('.defender').attr('hitpoints') - attackerTotalAttack;
		$('.defender').attr('hitpoints', defenderHitPoints);
		$('.defender').find('.HP').html('HP (Hit Points): ' + defenderHitPoints);
		attackCounter++;
		var defenderTotalAttack = $('.defender').attr('attackPower'); // coming out as a string sometimes after restart, so undefined happens???
		console.log(defenderTotalAttack);
		var attackerHitPoints = $('.attacker').attr('hitpoints') - defenderTotalAttack; // defenderTotalAttack comes out as string at times after restart (right above), so attackerHitPoints (being a mathematical operation) comes out as NaN???
		console.log(attackerHitPoints);
		$('.attacker').attr('hitpoints', attackerHitPoints);
		$('.attacker').find('.HP').html('HP (Hit Points): ' + attackerHitPoints);
		$('#gameupdates').html('<h3><em>Game Updates: </em></h3>');
		$('#gameupdates').append('<span>You attacked the defender for ' + attackerTotalAttack + ' hitpoints!<br></span>');
		$('#gameupdates').append('<span>The defender counterattacked you for ' + defenderTotalAttack + ' hitpoints!</span>');
		if (attackerHitPoints <= 0) {
			losses++;
			$('#attack').prop('disabled', true);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You\'ve lost!</span>');
			$('#lossescolumn').html(losses);
		}
		else if (defenderHitPoints <= 0) {
			$('#currentdefender').html('<h3><em>Current Defender:</em></h3>');
			canPickDefender = true;
			defenderLosses++;
			if (defenderLosses == people.length - 1) {
				wins++;
				$('#attack').prop('disabled', true);
				$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You\'ve won!</span>');
				$('#winscolumn').html(wins);
				cowabunga.play();
				return;
			}
			$('#attack').prop('disabled', true);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select another defender.</span>');
		}
	});
}

main();