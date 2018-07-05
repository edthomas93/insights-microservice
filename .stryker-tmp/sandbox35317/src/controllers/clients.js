var cov_2n33674wvm=function(){var path='/Users/Tom/Documents/FAB/getting-started-microservice/src/controllers/clients.js',hash='186e453b3ea063778640076f96fe4a8f1eff0eed',Function=function(){}.constructor,global=new Function('return this')(),gcv='__strykerCoverageCurrentTest__',coverageData={path:'/Users/Tom/Documents/FAB/getting-started-microservice/src/controllers/clients.js',statementMap:{'0':{start:{line:1,column:19},end:{line:1,column:50}},'1':{start:{line:2,column:20},end:{line:2,column:37}},'2':{start:{line:3,column:37},end:{line:3,column:57}},'3':{start:{line:4,column:23},end:{line:4,column:45}},'4':{start:{line:7,column:2},end:{line:7,column:42}},'5':{start:{line:8,column:2},end:{line:8,column:31}},'6':{start:{line:9,column:2},end:{line:23,column:3}},'7':{start:{line:10,column:22},end:{line:10,column:59}},'8':{start:{line:11,column:4},end:{line:11,column:57}},'9':{start:{line:12,column:4},end:{line:12,column:21}},'10':{start:{line:14,column:4},end:{line:18,column:5}},'11':{start:{line:16,column:6},end:{line:16,column:65}},'12':{start:{line:17,column:6},end:{line:17,column:16}},'13':{start:{line:21,column:4},end:{line:21,column:67}},'14':{start:{line:22,column:4},end:{line:22,column:30}},'15':{start:{line:26,column:0},end:{line:28,column:2}}},fnMap:{'0':{name:'create',decl:{start:{line:6,column:15},end:{line:6,column:21}},loc:{start:{line:6,column:30},end:{line:24,column:1}},line:6}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:18,column:5}},type:'if',locations:[{start:{line:14,column:4},end:{line:18,column:5}},{start:{line:14,column:4},end:{line:18,column:5}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0},f:{'0':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const{logger}=(cov_2n33674wvm.s[0]++,require('@spokedev/fab_logger'));const{metrics}=(cov_2n33674wvm.s[1]++,require('../lib'));const{BaseError,InternalError}=(cov_2n33674wvm.s[2]++,require('../errors'));const{DASAdapter}=(cov_2n33674wvm.s[3]++,require('../adapters'));async function create(client){cov_2n33674wvm.f[0]++;cov_2n33674wvm.s[4]++;logger.invocation({args:{client}});cov_2n33674wvm.s[5]++;metrics.increment('clients');cov_2n33674wvm.s[6]++;try{const saveValue=(cov_2n33674wvm.s[7]++,await DASAdapter.createClient(client));cov_2n33674wvm.s[8]++;logger.debug({msg:'Successfully Created Client'});cov_2n33674wvm.s[9]++;return saveValue;}catch(err){cov_2n33674wvm.s[10]++;if(err instanceof BaseError){cov_2n33674wvm.b[0][0]++;cov_2n33674wvm.s[11]++;// debug as error logged at DAS layer.
logger.debug({msg:'Error From DAS Adapter. Returning'});cov_2n33674wvm.s[12]++;throw err;}else{cov_2n33674wvm.b[0][1]++;}// it's important to put the error/message into the object as err/msg here.
// errors are logged when they occur
cov_2n33674wvm.s[13]++;logger.error({err,msg:'Unhandled Error From DAS Adapter'});cov_2n33674wvm.s[14]++;throw new InternalError();}}cov_2n33674wvm.s[15]++;module.exports={create};