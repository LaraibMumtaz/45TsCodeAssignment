//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestlist=['ali','amna','ayesha']
let NotComingGuest="amna"
//console.log(NotComingGuest)
let index=guestlist.indexOf(NotComingGuest)
//console.log(index)
let newGuest="Shophia"
guestlist[index]=newGuest
console.log(`New list: ${guestlist}`)

//new message to new list of guest
for (let i = 0; i<guestlist.length;i++){
    console.log(` Hi ${guestlist[i]}! Join us for a delightful dinner this Friday at 7 PM. We can't wait to enjoy good food and great conversation with you!`)
} 