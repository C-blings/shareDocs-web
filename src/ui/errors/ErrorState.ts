enum State {
    CORRECT,
    INCORRECT,
    UNDEFINED
}

export default class ErrorState{
    
    private value: string;
    private readonly defaultValue: string;
    private readonly activeValue: string;
    private state: State;

    constructor(defaultValue: string, activeValue: string) {
        this.value = defaultValue;
        this.defaultValue = defaultValue;
        this.activeValue = activeValue;
        this.state = State.UNDEFINED;
    }
    
    changeState = () => {
        if (this.value === this.activeValue){
            this.value = this.defaultValue;
        }else{
            this.value = this.activeValue;
        }
    }

    changeStateWithPredicate = (value: boolean) => {
        if (!value){
            this.value = this.activeValue;
            this.state = State.INCORRECT;
        }else{
            this.value = this.defaultValue;
            this.state = State.CORRECT;
        }
    }

    setDefault = () => {
        this.value = this.defaultValue;
    }

    setActive = () => {
        this.value = this.activeValue;
    }

    getState = () => {
        return this.value;
    }

    isCorrect = () => {
        return this.state == State.CORRECT;
    }
}