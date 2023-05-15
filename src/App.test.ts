import { App } from "./App";

describe('UNIT TEST - APP', ()=>{
    let component:App;
    
    beforeEach(() => {
		component = new App();
		
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

    it('initializes application', ()=>{
        let spy = jest.spyOn(component, 'init');
        expect(spy).toBeCalled();
    });

});