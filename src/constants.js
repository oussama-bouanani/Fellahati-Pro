export const CROPS=[
  ['olivier','الزيتون','https://images.unsplash.com/photo-1631209121750-a9f656d28f46?auto=format&fit=crop&w=640&q=80'],
  ['ble','القمح','https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=640&q=80'],
  ['orge','الشعير','https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?auto=format&fit=crop&w=640&q=80'],
  ['pomme-de-terre','البطاطا','https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=640&q=80'],
  ['tomate','الطماطم','https://images.unsplash.com/photo-1546470427-e5ac89cd0b31?auto=format&fit=crop&w=640&q=80'],
  ['oignon','البصل','https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=640&q=80'],
  ['carotte','الجزر','https://images.unsplash.com/photo-1447175008436-170170753b51?auto=format&fit=crop&w=640&q=80'],
  ['autre','محصول آخر','']
];
export const KIND_LABEL={land:'أرض',crop:'زراعة',harvest:'حصاد',sale:'بيع',expense:'مصروف'};
export const toKg=(q,u)=>Number(q||0)*(u==='t'?1000:1);
export function totals(rows){return rows.reduce((a,r)=>{if(!r.deleted){if(r.kind==='land')a.lands++;if(r.kind==='crop')a.crops++;if(r.kind==='harvest')a.harvest+=toKg(r.quantity,r.quantityUnit);if(r.kind==='sale'){a.sold+=toKg(r.quantity,r.quantityUnit);a.sales+=Number(r.amount||0)}if(r.kind==='expense')a.expenses+=Number(r.amount||0)}return a},{lands:0,crops:0,harvest:0,sold:0,sales:0,expenses:0});}
export const stock=t=>Math.max(0,t.harvest-t.sold);
