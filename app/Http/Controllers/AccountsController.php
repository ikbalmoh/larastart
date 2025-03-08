<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAccountRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class AccountsController extends Controller
{
    public function index(Request $request) : Response
    {
        $accounts = User::paginate();
        $accounts->getCollection()->transform(function ($user) {
            // Your code here
            $user->roleNames = $user->getRoleNames();
            return $user;
        });
        $roles = Role::all();
        return Inertia::render('Accounts/Page', [
            'accounts' => $accounts,
            'roles' => $roles,
        ]);
    }

    public function store(CreateAccountRequest $request) {
        try {
            DB::beginTransaction();
            $data = $request->only(['name', 'email']);
            $data['password'] = bcrypt($request->password);
            $account = User::create($data);
            $account->assignRole($request->roles);
            DB::commit();
            return to_route('accounts.index')->with(['message' => 'Account Successfully Created']);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
