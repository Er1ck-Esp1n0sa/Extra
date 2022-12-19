import { variacion } from './formula';

describe ('funcion', () =>{
    it('Should return y = [1 ,3, 5, 7], if X = [0.0, 1.0, 2.0, 3.0], a = 2 y b=1', ()=>{
        const y = variacion(2,1,[0.0,1.0,2.0,3.0]);
        expect(y).toEqual([1,3,5,7]);
    })
})
