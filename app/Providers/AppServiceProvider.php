<?php

namespace App\Providers;

use App\Http\Controllers\TestController;
use App\Sc\Proba;
use App\Sc\Sc;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
//        $this->app->singleton(Sc::class, function($app){
//            echo '=';
//            return new Sc(28);
//        });


        $this->app->when(TestController::class)
            ->needs(Sc::class)
            ->give(function () {
                echo 'ok';
                return new Sc(32);
            });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->when(TestController::class)
            ->needs(Sc::class)
            ->give(function () {
                return new Sc(32);
            });
        $this->app->when(TestController::class)
            ->needs('$name')
            ->give(234);

        View::share('elements', ['test', 'test1']);
    }
}
