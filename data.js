var pgpkey = "hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEgBF9WcmTT6h7TOeWD9H5/r9kP8Yp7VbK8KZ/zhppY9n4Kp3BheWxvYWTFAs57ImJvZHkiOnsiZGV2aWNlIjp7ImlkIjoiZmJiM2I1OWQ5NmNhYTY5NTcwODI0YWNjNGViNThmMTgiLCJraWQiOiIwMTIwMDQ1ZjU2NzI2NGQzZWExZWQzMzllNTgzZjQ3ZTdmYWZkOTBmZjE4YTdiNTViMmJjMjk5ZmYzODY5YTU4ZjY3ZTBhIiwibmFtZSI6IkFsaUJvb2sgUHJvIiwic3RhdHVzIjoxLCJ0eXBlIjoiZGVza3RvcCJ9LCJrZXkiOnsiaG9zdCI6ImtleWJhc2UuaW8iLCJraWQiOiIwMTIwMDQ1ZjU2NzI2NGQzZWExZWQzMzllNTgzZjQ3ZTdmYWZkOTBmZjE4YTdiNTViMmJjMjk5ZmYzODY5YTU4ZjY3ZTBhIiwidWlkIjoiNmZkZmQxYzdiODMyMWZmOTI0NGVjNTA2ZGM1Mjg3MTkiLCJ1c2VybmFtZSI6ImFsaWthcmFtaSJ9LCJ0eXBlIjoiZWxkZXN0IiwidmVyc2lvbiI6MX0sImNsaWVudCI6eyJuYW1lIjoia2V5YmFzZS5pbyBnbyBjbGllbnQiLCJ2ZXJzaW9uIjoiMS4wLjIzIn0sImN0aW1lIjoxNDk3MDQ4MDU0LCJleHBpcmVfaW4iOjUwNDU3NjAwMCwibWVya2xlX3Jvb3QiOnsiY3RpbWUiOjE0OTcwNDc4MDAsImhhc2giOiJiZTcwODU1NThmZmM5MTg4MjYzZDkwOGUzY2ZkOTZhYjhiYTM1OTYxMGMxYjgwZTQ1MjQwODRhZTZiNjlmYmVkOTRmZjNkYzViZTJhMjI4MTk0MDBmZWZlZTE0NjRjNTVkNWU3NjExNDBiYjI0NGY1ZjBhZGI1MzMwMzg5N2YxYiIsInNlcW5vIjoxMTU4OTAwfSwicHJldiI6bnVsbCwic2Vxbm8iOjEsInRhZyI6InNpZ25hdHVyZSJ9o3NpZ8RAjSWrzeqArxI1DlurmXhBYNhrHHwzLRdVB8KDGT8l7RLl6mHZhIig8HUEVZBEakNTsY0sZJXg+hXhaDM1GlBuCahzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIP27TjDE+3Gdel1XnI+7ijqt7CNl7V0WxO3n7uwR4gzVo3RhZ80CAqd2ZXJzaW9uAQ==";
var resumeUrl = './resume.pdf';
var blogUrl = './blog';
var greetingMsg = "Welcome to [[g;#ffaa00;]Ali Karami]'s Website.\n\nType [[bu;#;]help] for commands\n";
var myLocation = 'Tehran, Iran.'
var mans = {
	help: 'lists help for all the commands',
	man: 'describes what each command does',
	echo: 'monkey command repeats everything',
	clear: 'clear command history from screen',
	blog: 'redirects to my personal blog',
	pgpkey: 'print PGP key',
	about: 'about me',
	contact: 'contact information',
	location: 'current location',
	socialmedia: 'social media profiles',
	resume: 'download pdf version of résumé',
	skills: 'skills obtained',
	education: 'education history',
	employment: 'employment history',
	volunteering: 'volunteering history',
	languages: 'languages spoken',
	interests: 'list of interests',
	github: 'list Github repositories',
	js: 'javascript interpreter'
};
var contacts = {
	Email: 'ali.karami.m@gmail.com',
	Mobile: '+98 919 555 0832'
};
var social = {
	Twitter: 'https://twitter.com/AliKarami_',
	Facebook: 'https://www.facebook.com/ali.karami.m',
	Reddit: 'https://www.reddit.com/user/AliKarami/',
	Telegram: 'https://t.me/ali_karami',
	Instagram: 'https://www.instagram.com/alikarami_/'
};
var skills = {
	'Main Skill': ['NodeJS','Software Architecture'],
	'Skilled': ['Javascript','Java', 'ELK Stack','WebRTC','Redis & in-memory DBs'],
	'Familiar': ['C','C++','Python','SQL','RabbitMQ','WebSockets','CMSs'],
	'Knowledge': ['Database Management','Maps and Geospatial Tools','Linux','Cryptocurrencies','Design Basics']
};
var education = {
	Bachelor: {
		institution: 'University of Tehran',
		period: '2012-2018',
		location: 'Tehran'
	},
	Diploma: {
		institution: 'Mofid 1 Highschool Complex',
		period: '2007-2012',
		location: 'Tehran'
	},
	School: {
		institution: 'Rouzbeh Educational Complex',
		period: '1998-2007',
		location: 'Tehran'
	}
};
var employment = [{
	position: 'Map Team Leader',
	site: 'Snapp',
	location: 'Tehran',
	period: '2017-Pres'
},{
	position: 'Software Engineer',
	site: 'WING (Word of Innovative Geniuses)',
	location: 'Tehran',
	period: '2016-2017'
},{
	position: 'Trainee',
	site: 'MediaTools',
	location: 'Tehran',
	period: '2016-2016'
}];
var volunteering = [{
	type: 'Charity',
	name: 'VARES Charity Jouney Group',
	position: 'Manager',
	period: '2014-2016'
},{
	type: 'Student Association',
	name: 'Islamic Association of Electrical and Computer Engineering School of Tehran University',
	position: 'Manager',
	period: '2014-2016'
}];
var languages = [{
	lang: 'Persian',
	level: 'Mother Tongue'
},{
	lang: 'English',
	level: 'Fluent'
}];
var interests = ['Blockchain and Distributed Systems',
	'Data Analysis',
	'Voice Assistants',
	'Machine Learning',
	'Semantic Web',
	'Politics and Society',
	'Theaters, Movies, Series',
	'Football'];
	var aboutMe = "Geek? Eager to Learn?";
var githubUrl = 'https://github.com/AliKarami';