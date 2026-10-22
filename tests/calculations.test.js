import {describe,it,expect} from 'vitest';
import {totals,stock,toKg} from '../src/constants.js';
describe('calculs agricoles',()=>{
  it('convertit les tonnes en kilogrammes',()=>expect(toKg(1.5,'t')).toBe(1500));
  it('calcule récolte, vente, stock et bénéfice',()=>{const rows=[{kind:'harvest',quantity:2,quantityUnit:'t'},{kind:'sale',quantity:500,quantityUnit:'kg',amount:3500},{kind:'expense',amount:900}];const t=totals(rows);expect(t.harvest).toBe(2000);expect(t.sold).toBe(500);expect(stock(t)).toBe(1500);expect(t.sales-t.expenses).toBe(2600);});
  it('ignore les suppressions logiques',()=>expect(totals([{kind:'sale',amount:99,deleted:true}]).sales).toBe(0));
  it('additionne les arbres de plusieurs cultures sur une terre',()=>expect(totals([{kind:'land',treeCounts:{olivier:80,grenadier:25,figuier:10,dattier:12,arganier:8}}]).trees).toBe(135));
});
