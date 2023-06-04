jQuery(document).ready(function($) {
	var question = -1;
	var answers = [];
	var conf;
	var distrotable;

    var conf = {
    	"questions": [
    		{
    			"question": "Quanto ne sai di computer?",
    			"answers": [
    				"Non molto...",
    				"So arrangiarmi la maggior parte delle volte",
    				"Sono uno smanettone incallito!"
    			]
    		},
    		{
    			"question": "Hai già esperienza con Linux?",
    			"answers": [
    				"Mai visto neanche da lontano",
    				"Ho qualche amico che lo usa",
    				"Si, lo uso regolarmente"
    			]
    		},
    		{
    			"question": "Quale tra queste è la tua priorità?",
    			"answers": [
    				"Semplicità d'uso",
    				"Applicazioni sempre aggiornate all'ultima versione",
    				"Massimo controllo del sistema"
    			]
    		},
    		{
    			"question": "Quanti anni ha il PC su cui vorresti installare Linux?",
    			"answers": [
    				"Meno di due",
    				"Da due a cinque",
    				"Più di cinque"
    			]
    		}
    	],

    	"distributions": [
    		{
    			"name": "Mint",
    			"website": "http://www.linuxmint.com/",
    			"logo": "/images/distro_mint.png",
    			"answers": [0, 0, 0, 0]
    		},
    		{
    			"name": "Elementary",
    			"website": "https://elementary.io/",
    			"logo": "/images/distro_elementary.png",
    			"answers": [0, 0, 0, 1]
    		},
    		{
    			"name": "Lubuntu",
    			"website": "http://lubuntu.net/",
    			"logo": "/images/distro_lubuntu.png",
    			"answers": [0, 0, 0, 2]
    		},
    		{
    			"name": "Ubuntu",
    			"website": "http://www.ubuntu-it.org/",
    			"logo": "/images/distro_ubuntu.png",
    			"answers": [0, 1, 0, 0]
    		},
    		{
    			"name": "Fedora",
    			"website": "https://getfedora.org/it/",
    			"logo": "/images/distro_fedora.png",
    			"answers": [0, 1, 1, 0]
    		},
    		{
    			"name": "Mageia",
    			"website": "http://www.mageia.org/it/",
    			"logo": "/images/distro_mageia.png",
    			"answers": [1, 1, 0, 0]
    		},
    		{
    			"name": "openSUSE",
    			"website": "https://it.opensuse.org/",
    			"logo": "/images/distro_opensuse.png",
    			"answers": [1, 2, 1, 0]
    		},
    		{
    			"name": "Debian",
    			"website": "https://www.debian.org/index.it.html",
    			"logo": "/images/distro_debian.png",
    			"answers": [2, 2, 2, 1]
    		},
    		{
    			"name": "Arch",
    			"website": "http://www.archlinux.it/",
    			"logo": "/images/distro_arch.png",
    			"answers": [2, 2, 1, 0]
    		}
    	]
    };

	var master = $('#quiz');

	for (var question = 0; question < conf.questions.length; question++) {
		var node = $('<div>');
		node.append('<h2>' + conf.questions[question].question + '</h2>');

		var list = $('<ul>');
		var qanswers = conf.questions[question].answers;

		for(i = 0; i < qanswers.length; i++)
			list.append('<li><input type="radio" name="' + question + '" value="' + i + '" /><span>' + qanswers[i] + '</span></li>');

		node.append(list);
		master.append(node);

		answers[question] = -1;
	}

	distrotable = $('<table>');
	distrotable.attr('id', 'distros');
	var distros = $('<tbody>');
	distrotable.append(distros);

	for (var d = 0; d < conf.distributions.length; d++) {
		var row = $('<tr>');
		row.append('<td><img src="' + conf.distributions[d].logo + '"></td><td>' + conf.distributions[d].name + '</td>');
		for (var question = 0; question < conf.questions.length; question++) {
			row.append('<td class="answer">?</td>');
        }

		row.append('<td><a target="_blank" rel="nofollow" href="' + conf.distributions[d].website + '">Scarica</a></td>');
		distros.append(row);
	}

	master.append(distrotable);

	$('#quiz').on('click', 'li span', function(event) {
		$(this).siblings('input[type=radio]').click();
	});

	$('#quiz').on('click', 'input[type=radio]', function() {
		var selected = parseInt($(this).val());
		var question = parseInt($(this).attr('name'));

		answers[question] = selected;
		var complete = true;

		for (var d = 0; d < conf.distributions.length; d++) {
			var distro = conf.distributions[d];

			var cell = distrotable.find('tr').eq(d).find('td').eq(question + 2);
			if (distro.answers[question] == selected) {
				cell.attr('class', 'answer positive').text('Y');
			}
			else {
				cell.attr('class', 'answer negative').text('N');
			}
		}

		for (var i = 0; i < answers.length; i++) {
			if (answers[i] == -1) {
				complete = false;
				break;
			}
		}
	});
});
