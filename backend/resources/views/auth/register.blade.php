<!DOCTYPE html>
<html>
<head>
    <title>Registrar</title>
</head>
<body>
<h2>Registrar</h2>

@if ($errors->any())
    <ul style="color:red">
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
@endif

<form method="POST" action="{{ route('register') }}">
    @csrf
    <input type="text" name="name" placeholder="Nome" required><br><br>
    <input type="email" name="email" placeholder="Email" required><br><br>
    <input type="password" name="password" placeholder="Senha" required><br><br>
    <input type="password" name="password_confirmation" placeholder="Confirmar Senha" required><br><br>
    <button type="submit">Registrar</button>
</form>

<p>Já tem conta? <a href="{{ route('login') }}">Login</a></p>
</body>
</html>
