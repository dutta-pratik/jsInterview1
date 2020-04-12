//Q10. Implement LinkedList class in JS.

function LinkedList() { 
    let length = 0; 
    let head = null; 
  
    //Create new Node
    let Node = function(data){
      this.data = data; 
      this.next = null; 
    }; 
  
    //Return size
    this.size = function(){
      return length;
    };
  
    //Return head
    this.head = function(){
      return head;
    };
  
    // Adding data in LL
    this.add = function(data){
      let node = new Node(data);
      if(head === null){
          head = node;
      } else {
          var presentNode = head;
  
          while(presentNode.next){
              presentNode  = presentNode.next;
          }
  
          presentNode.next = node;
      }
  
      length++;
    }; 
  
} 
  //----------INITIALISING LL----------------//
  let ll = new LinkedList();

  //-----------ADDING ELEMENTS--------------//
  ll.add(10);
  ll.add(20);
  ll.add(30);
  ll.add(40);
  ll.add(50);
//---------SIZE OF LL---------------------//
console.log(ll.size());
//-----------TRAVERSE LINKEDLIST-------------//
let cur = ll.head();
while(cur){
  console.log(cur);
  cur = cur.next;
}
