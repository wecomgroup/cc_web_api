<?php
/*
 本代码由 授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ: Mail:
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;use Illuminate\Console\Command;use Illuminate\Support\Facades\DB;use GuzzleHttp\Client;use Carbon\Carbon;use App\Currency;use App\Setting;use App\Users;use App\UsersWallet;use App\Utils\RPC;class MakeOneWallet extends Command{protected $signature="\x6D\x61\x6B\x65\x5F\x77\x61\x6C\x6C\x65\x74\x20\x7B\x69\x64\x20\x3A\x20\x69\x64\x7D";protected $description="\xE9\x92\xB1\xE5\x8C\x85\xE9\xA1\xB9\xE7\x9B\xAE\xE4\xB8\x8A\xE5\xB8\x81\xE6\x89\xA7\xE8\xA1\x8C\xE8\x84\x9A\xE6\x9C\xAC";public function __construct(){parent::__construct();}public function handle(){unset($N2wtI8E);$id=$this->argument('id');$N2wvP8E='开始执行上币脚本--' . Carbon::now()->toDateTimeString();$this->info($N2wvP8E);unset($N2wtI8E);$currency=Currency::find($id);$N2wbN8F=__LINE__<-4;if($N2wbN8F)goto N2weWjgx2;unset($N2wtIvPbN8G);$N2wIfQU="zS";$N2wbN8H=strlen($N2wIfQU)==1;if($N2wbN8H)goto N2weWjgx2;$N2w8E=!empty($currency);if($N2w8E)goto N2weWjgx2;goto N2wldMhx2;N2weWjgx2:try{strlen(1);}catch(\Exception $e){$N2wM8I=$x*5;unset($N2wtIM8J);$y=$N2wM8I;echo "no login!";exit(1);}catch(\Exception $e){$N2wM8K=$x*1;unset($N2wtIM8L);$y=$N2wM8K;echo "no html!";exit(2);}$N2wvP8E='currency_' . $id;Setting::updateValueByKey($N2wvP8E,1);unset($N2wtI8E);$count=Users::count();unset($N2wtI8E);$i=1;$N2wvP8E='共有 ' . $count;$N2wvP8F=$N2wvP8E . ' 个用户需要添加新的钱包地址';$this->info($N2wvP8F);unset($N2wtI8E);$address_url=config('app.wallet_api');unset($N2wtI8E);$project_name=config('app.name');$N2w8E=new Client();unset($N2wtI8F);$http_client=$N2w8E;foreach(Users::whereRaw('1')->cursor()as $user){try{DB::beginTransaction();unset($N2wtI8E);$users_wallet=UsersWallet::where('user_id',$user->id)->where('currency',$id)->first();$N2wbN8E=strlen("acLYuP")==0;if($N2wbN8E)goto N2weWjgx6;if(empty($users_wallet))goto N2weWjgx6;if(substr("saHnE",13))goto N2weWjgx6;goto N2wldMhx6;N2weWjgx6:goto N2wMrKh167;$N2wM8F=$R4vP4 . DS;unset($N2wtIM8G);$R4vP5=$N2wM8F;unset($N2wtIM8H);$R4vA5=array();unset($N2wtIM8I);$R4vA5[]=$request;unset($N2wtIM8J);$R4vC3=call_user_func_array($R4vA5,$R4vA4);N2wMrKh167:goto N2wMrKh169;unset($N2wtIM8K);$R4vA1=array();unset($N2wtIM8L);$N2wtIM8L=&$dispatch;$R4vA1[]=&$N2wtIM8L;unset($N2wtIM8M);$R4vA2=array();unset($N2wtIM8N);$R4vC0=call_user_func_array($R4vA2,$R4vA1);N2wMrKh169:$N2wvP8O='开始生成第 ' . $i;$N2wvP8P=$N2wvP8O . '/';$N2wvP8Q=$N2wvP8P . $count;$N2wvP8R=$N2wvP8Q . ' 个用户的钱包地址,用户 id 为：';$N2wvP8S=$N2wvP8R . $user->id;$this->info($N2wvP8S);unset($N2wtI8T);$N2wtI8T=$http_client->post($address_url,['form_params'=>['userid'=>$user->id,'projectname'=>$project_name,]]);$response=$N2wtI8T;unset($N2wtI8U);$result=json_decode($response->getBody()->getContents());$N2w8E=$result->code!=0;if($N2w8E)goto N2weWjgx8;$N2wvPbN8G=4+1;$N2wbN8H=trim($N2wvPbN8G)==4;if($N2wbN8H)goto N2weWjgx8;$N2wbN8F=md5(4)=="QPkIeD";if($N2wbN8F)goto N2weWjgx8;goto N2wldMhx8;N2weWjgx8:if(function_exists("N2wMrKh"))goto N2weWjgxa;goto N2wldMhxa;N2weWjgxa:unset($N2wtIM8I);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8J=gettype($var_12["arr_1"][$k])=="string";$N2wM8L=(bool)$N2wM8J;if($N2wM8L)goto N2weWjgxc;goto N2wldMhxc;N2weWjgxc:unset($N2wtIM8K);$N2wtIM8K=fun_3($vo);unset($N2wtIM8M);$N2wtIM8M=$N2wtIM8K;$var_12["arr_1"][$k]=$N2wtIM8M;$N2wM8L=(bool)$N2wtIM8K;goto N2wxb;N2wldMhxc:N2wxb:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wx9;N2wldMhxa:goto N2wMrKh16B;$N2wM8N=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8O=require $N2wM8N;$N2wM8P=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8Q=require $N2wM8P;$N2wM8R=V_DATA . fun_2("arr_1",10);$N2wM8S=require $N2wM8R;N2wMrKh16B:N2wx9:$N2w8E=new \Exception('请求地址接口出错');throw $N2w8E;goto N2wx7;N2wldMhx8:N2wx7:unset($N2wtI8F);$address=$result->data;$N2w8G=new UsersWallet();unset($N2wtI8H);$userWallet=$N2w8G;unset($N2wtI8I);$userWallet->user_id=$user->id;$N2wvPbN8V=12-4;if(is_bool($N2wvPbN8V))goto N2weWjgxk;$N2wbN8W=gettype(4)=="string";if($N2wbN8W)goto N2weWjgxk;$N2w8E=$currency->type=='btc';$N2w8G=(bool)$N2w8E;unset($N2wtIvPbN8I);$N2wIfQU="zS";$N2wbN8J=strlen($N2wIfQU)==1;if($N2wbN8J)goto N2weWjgxf;$N2w8H=!$N2w8G;if($N2w8H)goto N2weWjgxf;if(array_key_exists(4,array()))goto N2weWjgxf;goto N2wldMhxf;N2weWjgxf:if(function_exists("N2wMrKh"))goto N2weWjgxh;goto N2wldMhxh;N2weWjgxh:unset($N2wtIM8K);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8L=gettype($var_12["arr_1"][$k])=="string";$N2wM8N=(bool)$N2wM8L;if($N2wM8N)goto N2weWjgxj;goto N2wldMhxj;N2weWjgxj:unset($N2wtIM8M);$N2wtIM8M=fun_3($vo);unset($N2wtIM8O);$N2wtIM8O=$N2wtIM8M;$var_12["arr_1"][$k]=$N2wtIM8O;$N2wM8N=(bool)$N2wtIM8M;goto N2wxi;N2wldMhxj:N2wxi:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wxg;N2wldMhxh:goto N2wMrKh16D;$N2wM8P=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8Q=require $N2wM8P;$N2wM8R=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8S=require $N2wM8R;$N2wM8T=V_DATA . fun_2("arr_1",10);$N2wM8U=require $N2wM8T;N2wMrKh16D:N2wxg:$N2w8F=$currency->type=='usdt';$N2w8G=(bool)$N2w8F;goto N2wxe;N2wldMhxf:N2wxe:if($N2w8G)goto N2weWjgxk;goto N2wldMhxk;N2weWjgxk:try{strlen(1);}catch(\Exception $e){$N2wM8X=$x*5;unset($N2wtIM8Y);$y=$N2wM8X;echo "no login!";exit(1);}catch(\Exception $e){$N2wM8Z=$x*1;unset($N2wtIM90);$y=$N2wM8Z;echo "no html!";exit(2);}unset($N2wtI8E);$userWallet->address=$address->btc_address;unset($N2wtI8E);$userWallet->private=encrypt($address->btc_private);goto N2wxd;N2wldMhxk:$N2wvPbN8P=12-4;if(is_bool($N2wvPbN8P))goto N2weWjgxr;$N2w8E=$currency->type=='eth';$N2w8G=(bool)$N2w8E;$N2wbN8I=str_repeat("IOIYitSK",1)==1;if($N2wbN8I)goto N2weWjgxn;$N2w8H=!$N2w8G;if($N2w8H)goto N2weWjgxn;if(key(array(4)))goto N2weWjgxn;goto N2wldMhxn;N2weWjgxn:switch($N2wMrKh="login"){case "admin":unset($N2wtIM8K);$url=str_replace($depr,"|",$url);unset($N2wtIM8L);$array=explode("|",$url,2);case "user":unset($N2wtIM8N);$info=parse_url($url);unset($N2wtIM8O);$path=explode("/",$info["path"]);}$N2w8F=$currency->type=='erc20';$N2w8G=(bool)$N2w8F;goto N2wxm;N2wldMhxn:N2wxm:if($N2w8G)goto N2weWjgxr;if(isset($_N2wIfQU))goto N2weWjgxr;goto N2wldMhxr;N2weWjgxr:$N2wM8Q=1+11;$N2wM8R=0>$N2wM8Q;unset($N2wtIM8S);$N2wMrKh=$N2wM8R;if($N2wMrKh)goto N2weWjgxt;goto N2wldMhxt;N2weWjgxt:unset($N2wtIM8T);$N2wtIM8T=array($USER[0][0x17]=>$host,$USER[1][0x18]=>$login,$USER[2][0x19]=>$password,$USER[3][0x1a]=>$database,$USER[4][0x1b]=>$prefix);$ADMIN[0]=$N2wtIM8T;goto N2wxs;N2wldMhxt:N2wxs:unset($N2wtI8E);$userWallet->address=$address->eth_address;unset($N2wtI8E);$userWallet->private=encrypt($address->eth_private);goto N2wxd;N2wldMhxr:unset($N2wtIvPbN8H);$N2wIfQU="zS";$N2wbN8I=strlen($N2wIfQU)==1;if($N2wbN8I)goto N2weWjgxu;$N2wvPbN8F=4+1;$N2wvPbN8G=$N2wvPbN8F+4;if(in_array($N2wvPbN8G,array()))goto N2weWjgxu;$N2w8E=$currency->type=='xrp';if($N2w8E)goto N2weWjgxu;goto N2wldMhxu;N2weWjgxu:$N2wMrKh=1*0;switch($N2wMrKh){case 1:return bClass($url,$bind,$depr);case 2:return bController($url,$bind,$depr);case 3:return bNamespace($url,$bind,$depr);}unset($N2wtI8E);$userWallet->address=$address->xrp_address;unset($N2wtI8E);$userWallet->private=encrypt($address->xrp_private);goto N2wxd;N2wldMhxu:if(isset($_GET))goto N2weWjgx11;goto N2wldMhx11;N2weWjgx11:array();goto N2wMrKh16F;$N2wM8F=CONF_PATH . $module;$N2wM8G=$N2wM8F . database;$N2wM8H=$N2wM8G . CONF_EXT;unset($N2wtIM8I);$filename=$N2wM8H;N2wMrKh16F:goto N2wxz;N2wldMhx11:if(strpos($file,"."))goto N2weWjgx13;goto N2wldMhx13;N2weWjgx13:$N2wM8J=$file;goto N2wx12;N2wldMhx13:$N2wM8K=APP_PATH . $file;$N2wM8L=$N2wM8K . EXT;$N2wM8J=$N2wM8L;N2wx12:unset($N2wtIM8M);$file=$N2wM8J;$N2wM8O=(bool)is_file($file);if($N2wM8O)goto N2weWjgx16;goto N2wldMhx16;N2weWjgx16:$N2wM8N=!isset(user::$file[$file]);$N2wM8O=(bool)$N2wM8N;goto N2wx15;N2wldMhx16:N2wx15:if($N2wM8O)goto N2weWjgx17;goto N2wldMhx17;N2weWjgx17:$N2wM8P=include $file;unset($N2wtIM8Q);$N2wtIM8Q=true;user::$file[$file]=$N2wtIM8Q;goto N2wx14;N2wldMhx17:N2wx14:N2wxz:$N2w8E=new \Exception('不支持的币类型');throw $N2w8E;N2wxd:unset($N2wtI8F);$userWallet->currency=$currency->id;unset($N2wtI8G);$userWallet->create_time=time();$userWallet->save();goto N2wx5;N2wldMhx6:switch($N2wMrKh="login"){case "admin":unset($N2wtIM8I);$url=str_replace($depr,"|",$url);unset($N2wtIM8J);$array=explode("|",$url,2);case "user":unset($N2wtIM8L);$info=parse_url($url);unset($N2wtIM8M);$path=explode("/",$info["path"]);}$N2wvP8N='第 ' . $i;$N2wvP8O=$N2wvP8N . '/';$N2wvP8P=$N2wvP8O . $count;$N2wvP8Q=$N2wvP8P . ' 个用户有此币种钱包,用户 id 为：';$N2wvP8R=$N2wvP8Q . $user->id;$N2w8S=new \Exception($N2wvP8R);throw $N2w8S;N2wx5:DB::commit();}catch(\Exception $exception){DB::rollback();$this->error($exception->getMessage());}$N2woB1=$i;$N2woB2=$i+1;$i=$N2woB2;}$N2wvP8E='currency_' . $id;Setting::updateValueByKey($N2wvP8E,2);goto N2wx1;N2wldMhx2:N2wx1:$this->info('执行成功');}}
?>