import { App } from "./App";

describe('UNIT TEST - APP', ()=>{
    let component:App;
    document.body.innerHTML = `<div id="app"></div>`;

    beforeEach(() => {
		
		
	});

	afterEach(() => {
		jest.clearAllMocks();
        document.body.innerHTML = `<div id="app"></div>`;
	});

    it('initializes application', ()=>{
        let appElement = document.getElementById('app');
        component = new App();
        expect(appElement?.childElementCount).toBeGreaterThan(0);
    });

   

});