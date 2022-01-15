class Event{
    constructor(title,date){
            this.title=title;
            this.date=date;
    }
}

class EventOrganizer{
    constructor(){
            this.events=[]
    }

    addNewEvent(event){
            let org=0;
            for(let i=0; i<this.events.length;i++){
                    if(event.title==this.events[i].title){
                            org=1;
                            break;
                    }
            }

            if(org==0)
                    this.events.push(event)
    }

    removeEvent(title){
            this.events= this.events.filter(function(x){
                    return x.title!=title;
            });
    }

}
