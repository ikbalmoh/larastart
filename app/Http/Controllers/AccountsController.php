<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AccountsController extends Controller
{
    public function index(Request $request) : Response
    {
        $accounts = User::with('roles')->paginate();
        return Inertia::render('Accounts/Page', [
            'accounts' => $accounts
        ]);
    }
}
