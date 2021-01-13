class Test {
    constructor(uniqueName, title = '', description = '', weight = null) {
        this.uniqueName = uniqueName;
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.score = score;
        this.recommandations = [];
        this.snippets = [];
        this.table = [];
    }
    
    //setters
    setTitle(title){
        if (typeof title === 'string') {
            this.title = title
            return this
        }
    }
    setDescription(description){
        if (typeof description === "string") {
            this.description = description
            return this    
        }
    }
        
    setWeight(weight){
        if (typeof weight === "number" && (weight > 0 && weight < 1)) {
            this.weight = weight
            return this    
        } 
        
    }
    setScore(score){
        if (typeof score === "number" && (score > 0 && score < 1)) {
            this.score = score
            return this  
        } 
    }

    //getters
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getWeight() {
        return this.weight
    }
    getScore() {
        return this.score
    }
    getRecommandations() {
        return this.recommandations
    }
    getSnippets() {
        return this.snippets
    }

    //methods
    addRecommandation(recommandation) {
        this.recommandations.push(recommandation);
    }
    addSnippets (snippet){
        this.snippets.push(snippet)
    }
}