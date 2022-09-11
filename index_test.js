var expect = chai.expect;

describe('myFunction2', function(){
    describe('#doSomething', function() {
        it('should verify that each player hand is equal to 26 cards', function(){
            let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
            let hand = checkSize(array);
            expect(hand).to.equal(true);
        }) 
        it('should throw error if player hand is not equal to 26 cards', function() {
            let array2 = [1,2,3]; 
            let hand2 = checkSize(array2);
            expect(hand2).to.equal("Player deck size is not correct.")
    }); 
});
});