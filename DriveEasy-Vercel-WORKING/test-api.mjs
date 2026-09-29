import handler from './api/[...path].js';
const req={method:'GET',url:'/api/vehicles',query:{path:['vehicles']}};
const res={statusCode:200,status(n){this.statusCode=n;return this},json(v){console.log('status',this.statusCode,'count',Array.isArray(v)?v.length:v);}};
await handler(req,res);
