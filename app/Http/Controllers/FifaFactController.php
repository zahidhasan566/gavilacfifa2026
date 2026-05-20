<?php

namespace App\Http\Controllers;

use App\Models\FifaFact;
use Illuminate\Http\Request;

class FifaFactController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->type;

        $query = FifaFact::where('is_active', true)->orderBy('sort_order');

        if ($type) {
            $query->where('type', $type);
        }

        $facts = $query->get()->map(fn($f) => [
            'id'          => $f->id,
            'type'        => $f->type,
            'title'       => $f->title,
            'description' => $f->description,
            'image_url'   => $f->image ? asset('storage/' . $f->image) : null,
            'link'        => $f->link,
        ]);

        return response()->json(['status' => 'success', 'data' => $facts]);
    }
}
