const gameScene = new Phaser.Scene('game')

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: gameScene		
}

const game = new Phaser.Game(config)

gameScene.preload = function () {
	this.load.image ('sky', 'assets/sky.png')
	this.load.image ('1', 'assets/1.png')
	this.load.image ('2', 'assets/2.png')
	this.load.image ('3', 'assets/3.png')
}


function shuffle(arr){
	let j, temp
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1))
		temp = arr[j]
		arr[j] = arr[i]
		arr[i] = temp
	}
	return arr
}

let field = [
	{x: 300, y: 50},
	{x: 400, y: 50},
	{x: 500, y: 50},
	{x: 300, y: 150},
	{x: 400, y: 150},
	{x: 500, y: 150},
	{x: 300, y: 250},
	{x: 400, y: 250},
	{x: 500, y: 250},
]

let array = [1,1,1,2,2,2,3,3,3]
let pool = shuffle(array)

let triple = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]]

 let del = function () {
	 for (let i = 0; i < triple.length; i++) {
		 if (pool[triple[i][0]] == 1 && pool[triple[i][1]] == 1 && pool[triple[i][2]] == 1 ) {
			 delete pool[triple[i][0]]
			 delete pool[triple[i][1]]
			 delete pool[triple[i][2]]
		 }
		 if (pool[triple[i][0]] == 2 && pool[triple[i][1]] == 2 && pool[triple[i][2]] == 2 ) {
			delete pool[triple[i][0]]
			delete pool[triple[i][1]]
			delete pool[triple[i][2]]
		}
		if (pool[triple[i][0]] == 3 && pool[triple[i][1]] == 3 && pool[triple[i][2]] == 3 ) {
			delete pool[triple[i][0]]
			delete pool[triple[i][1]]
			delete pool[triple[i][2]]
		}
	 }
 }



let color = function(arr, index) {
	if (arr[index] == 1) { return 1 }
	if (arr[index] == 2) { return 2 }
	if (arr[index] == 3) { return 3 }
}


gameScene.create = function() {
	
 
	let bg = this.add.sprite(0, 0, 'sky')
	bg.setOrigin(0, 0)

	del()

	for (let i = 0; i < field.length; i++) {
		this.add.sprite(field[i].x,field[i].y, color(pool, i))	
	}
}
	






