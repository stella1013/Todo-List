import { App } from "./App";

describe('UNIT TEST - APP', ()=>{
    let component:App;
    document.body.innerHTML = `<div id="app"></div>`;

    beforeEach(() => {
		
		
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

    it('initializes application', ()=>{
        let appElement = document.getElementById('app');
        component = new App();
        expect(appElement?.childElementCount).toBeGreaterThan(0);
    });

    it('Shows one todo upon updating the DOM', ()=>{
        let todoList = document.getElementById('todo-list');
        expect(todoList?.childElementCount).toBe(1);

    
    });

});