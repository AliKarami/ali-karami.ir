jQuery(function($, undefined) {
    $('body').terminal({
    	echo: function() {
    		var words = [];
    		for (var i=0,len=arguments.length;i<len;i++)
    			words.push(arguments[i]);
    		this.echo(words.join(' '));
    	},
    	help: function() {
    		var _this = this;
    		for (var command in mans)
    			this.echo('[[ugb;;]' + command + ']' + ' - ' + mans[command]);
    	},
        blog: function() {
            this.echo("opening blog")
            setTimeout(function(){
                    window.open(blogUrl,'_blank');
                }, 1000);

        },
    	pgpkey: function() {
    		this.echo("-----BEGIN PGP PUBLIC KEY BLOCK-----");
    		this.echo(pgpkey);
    		this.echo("-----END PGP PUBLIC KEY BLOCK-----");
    	},
    	man: function() {
    		var _this = this;
    		if (arguments[0] && mans[arguments[0]])
    			_this.echo('[[ugb;;]' + arguments[0] + ']' + ' - ' + mans[arguments[0]]);
    		else if (arguments[0]){
    			_this.error("'" + arguments[0] + "'" + "is not valid command.")
    		}
    	},
    	about: function() {
    		this.echo(aboutMe);
    	},
    	contact: function() {
    		for (var contact in contacts) {
    			var key = "[[gb;;]● " + contact + ":\t]";
    			var value = "[[!u;#00a5ff;]" + contacts[contact] + "]";
    			this.echo(key + value);
    		}
    	},
    	resume: function() {
    		this.echo("opening résumé.pdf")
			setTimeout(function(){
					window.open(resumeUrl,'_blank');
				}, 1000);
    	},
    	location: function() {
    		this.echo(myLocation);
    	},
    	socialmedia: function() {
    		for (var media in social) {
    			var key = "[[gb;;]● " + media + ":]";
    			var value = "[[!u;#00a5ff;]" + social[media] + "]";
    			this.echo(key + (media.length<7?'\t\t\t':'\t\t') + value);
    		};
    	},
    	skills: function() {
    		var _this = this;
    		for (var category in skills) {
    			var key = "[[b;;]● " + category + ":]";
    			var values = [];
    			skills[category].forEach(function(skill) {
    				values.push("[[i;;]" + skill + "]");
    			});
    			_this.echo(key);
    			values.forEach(function(skill) {
    				_this.echo('\t-' + skill);
    			});
    		};
    	},
    	education: function() {
    		var _this = this;
    		for (var edu in education) {
    			var key = "[[b;;]● " + edu + ":]";
    			var value = "[[u;;]" + education[edu].institution + "]" + (education[edu].institution.length<25?"\t\t":"\t") +
    				"[[i;;]" + education[edu].location + "]" + "\t" +
    				"[[g;;]" + education[edu].period + "]";
    			_this.echo(key + '\t\t' + value);
    		}
    	},
    	employment: function() {
    		var _this = this;
    		employment.forEach(function(emp) {
    			_this.echo("[[i;;]" + emp.period + "]" + "\t" + "[[b;;]" + emp.position + "]" + (emp.position.length<11?"\t\t\t":"\t") + emp.site + "\t" + emp.location);
    		});
    	},
    	volunteering: function() {
    		var _this = this;
    		volunteering.forEach(function(vol) {
    			_this.echo("[[b;;]● " + vol.type + ":]")
    			_this.echo("[[i;;]" + vol.period + "]" + "\t" + vol.position + " of " + vol.name);
    		});
    	},
    	languages: function() {
    		var _this = this;
    		languages.forEach(function(l) {
    			_this.echo("[[b;;]● " + l.lang + "]" + "\t" + "[[i;;]" + l.level + "]");
    		});
    	},
    	interests: function() {
    		var _this = this;
    		interests.forEach(function(i) {
    			_this.echo('\t -' + i);
    		});
    	},
    	github: function() {
    		this.echo("opening github page...")
			setTimeout(function(){
					window.open(githubUrl,'_blank');
				}, 1000);
    	},
        js: {

        }
    }, {
    	checkArity: false,
    	completion: true,
    	greetings: greetingMsg,
        height: 150,
        width: $(window).width(),
        onCommandNotFound: function(command, terminal) {
            if(terminal.level()==1)
    	       terminal.error("'"+command+"' is not right command");
            else if (terminal.level()==2) {
                if (command !== '') {
                    var result = window.eval(command);
                    if (result != undefined) {
                        terminal.echo(String(result));
                    }
                }
            }
        },
        //onResize: function(terminal) {
       // 	terminal.resize([$(window).width(),$(window).height()]);
       // 	terminal.reset();
        //},
        prompt: "[[b;#00c40d;]ali-karami.ir> ]"
    });
});