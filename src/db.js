import Dexie from 'dexie';
export const db=new Dexie('fellahati-pro');
db.version(1).stores({records:'key,uid,id,kind,date,updatedAt',queue:'key,uid,id,updatedAt',meta:'key'});
export const key=(uid,id)=>`${uid}:${id}`;
export async function records(uid){return (await db.records.where('uid').equals(uid).toArray()).map(x=>x.value).filter(x=>!x.deleted);}
export async function saveLocal(uid,value,queue=true){await db.transaction('rw',db.records,db.queue,async()=>{await db.records.put({key:key(uid,value.id),uid,id:value.id,kind:value.kind,date:value.date,updatedAt:value.updatedAt,value});if(queue)await db.queue.put({key:key(uid,value.id),uid,id:value.id,updatedAt:value.updatedAt,value});});}
export async function removeLocal(uid,id){const old=await db.records.get(key(uid,id));if(!old)return;const value={...old.value,deleted:true,updatedAt:Date.now()};await saveLocal(uid,value,true);}
export const queued=uid=>db.queue.where('uid').equals(uid).toArray();
export const clearQueue=k=>db.queue.delete(k);
export async function mergeRemote(uid,value){const local=await db.records.get(key(uid,value.id));if(!local||local.value.updatedAt<=value.updatedAt)await saveLocal(uid,value,false);}
