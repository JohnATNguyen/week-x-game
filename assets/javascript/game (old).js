var wins = 0;
var losses = 0;

function main() {
	// set variables
	var people = [
		turtles = {
			id: "turtles",
			nameAndAlt: "One of the Turtles",
			imageLink: "assets/images/Teenage_Mutant_Ninja_Turtles_(Kevin_Eastman's_art).jpg",
			hitPoints: Math.floor(Math.random() * 200) + 1,
			attackPower: Math.floor(Math.random() * 5) + 1
		},
		splinter = {
			id: "splinter",
			nameAndAlt: "Master Splinter",
			imageLink: "assets/images/Splinter_(David_Petersen's_art).jpg",
			hitPoints: Math.floor(Math.random() * 150) + 1,
			attackPower: Math.floor(Math.random() * 15) + 1
		},
		april = {
			id: "april",
			nameAndAlt: "April O'Neil",
			imageLink: "assets/images/April_O'Neil_(character).jpg",
			hitPoints: Math.floor(Math.random() * 175) + 1,
			attackPower: Math.floor(Math.random() * 10) + 1
		},
		shredder = {
			id: "shredder",
			nameAndAlt: "The Shredder",
			imageLink: "assets/images/TMNTShredderComic.jpg",
			hitPoints: Math.floor(Math.random() * 125) + 1,
			attackPower: Math.floor(Math.random() * 20) + 1
		}
	]
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

	// user clicks a character
	$('.characts').on('click', function() {
		if (canPickAttacker) {
			var attacker = $(this).addClass('attacker');
			$('#currentcharacter').append(this);
			canPickAttacker = false;
			attackerid = $(this).attr('id')
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Please select a defender.</span>');
		}
		else if (canPickDefender && $(this).attr('id') != attackerid) {
			var defender = $(this).addClass('defender');
			$('#currentdefender').append(this);
			canPickDefender = false;
			$('#attack').prop('disabled', false);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>Attack the defender!</span>');
		}
	});

	$('#attack').on('click', function() {
		var attackerTotalAttack = parseInt($('.attacker').attr('attackpower')) + parseInt($('.attacker').attr('attackpower')*attackCounter);
		var defenderhitpoints = $('.defender').attr('hitpoints') - attackerTotalAttack;
		$('.defender').attr('hitpoints', defenderhitpoints);
		$('.defender').find('.HP').html('HP (Hit Points): ' + defenderhitpoints);
		attackCounter++;
		var defenderTotalAttack = $('.defender').attr('attackpower');
		console.log(defenderTotalAttack);
		var attackerhitpoints = $('.attacker').attr('hitpoints') - defenderTotalAttack;
		console.log(attackerhitpoints);
		$('.attacker').attr('hitpoints', attackerhitpoints);
		$('.attacker').find('.HP').html('HP (Hit Points): ' + attackerhitpoints);
		$('#gameupdates').html('<h3><em>Game Updates: </em></h3>');
		$('#gameupdates').append('<span>You attacked the defender for ' + attackerTotalAttack + ' hitpoints!<br></span>');
		$('#gameupdates').append('<span>The defender counterattacked you for ' + defenderTotalAttack + ' hitpoints!</span>');
		if (attackerhitpoints <= 0) {
			losses++;
			$('#attack').prop('disabled', true);
			$('#gameupdates').html('<h3><em>Game Updates: </em></h3><span>You\'ve lost!</span>');
			$('#lossescolumn').html(losses);
		}
		else if (defenderhitpoints <= 0) {
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