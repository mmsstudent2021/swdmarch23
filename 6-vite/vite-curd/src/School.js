import listeners from "./core/listeners";
import renders from "./core/renders";

class School {

    init(){
        console.log("School Start");
        renders()
        listeners()
    }
}

export default School;