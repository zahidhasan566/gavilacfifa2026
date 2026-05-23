<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        Schema::defaultStringLength(191);

        // On production, public_html is the web root but public_path() defaults to
        // fifa2026/public — override it so file uploads land in the correct directory.
        if (app()->environment('production')) {
            $this->app->bind('path.public', function () {
                return dirname(base_path()) . DIRECTORY_SEPARATOR . 'public_html';
            });
        }
    }
}
