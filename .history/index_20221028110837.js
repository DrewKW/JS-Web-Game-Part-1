
function newImage() {
    let newImage = document.createElement('img')
}

newImage()


add(newImage('assets/tree.png')).to(200, 300)
add(newImage('assets/pillar.png')).to(350, 100)
add(newImage('assets/crate.png')).to(150, 200)
add(newImage('assets/well.png')).to(500, 425)


let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree= document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

