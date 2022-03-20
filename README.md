<h1 align="center">The Swan House</h1>
The Swan House to sklep internetowy zajmujący się sprzedażą biżuterii. Powstaną aplikacja internetowa oraz analogiczna aplikacja mobilna.

## Aplikacja internetowa

### Opis projektu 

### Rejestracja

Po uruchomieniu apliakcji poprzez wpisanie w terminalu Visual Studio Code komendy npm start jako pierwsza ukazuję się podstrona rejestracji użytkownika. Wymagane dane do rejestracji to: nazwa użytkownika, e-mail oraz hasło. Po wciśnięciu przycisku "Sign up" następuje utowrzenie konta i przejście do ekranu home.

![Rejestracja](https://user-images.githubusercontent.com/80101842/159140485-c53806ca-7087-49f7-9824-c1a04b3ce097.png)

### Logowanie

Gdy uzytkownik posiada już konto w serwisie to loguje się poprzez uzupełnienie formularza w zakładce Login. Podaje on e-mail oraz hasło. Po wciśnięciu przycisku "Log in", zostaje przekierowany na stronę główną.

![Logowanie](https://user-images.githubusercontent.com/80101842/159140484-7df30c40-f3d9-4ad9-b9ff-475bf32bc5f7.png)

### Home
Użytkownik, wchodząc na sklepu internetowego The Swan House ma możliwość zobaczenia najnowyszych ofert, najbardziej popularnych przedmiotów,okazjonalnych
koleckji biżuterii a także wyszukać produkt po marce, kolorze czy rozmiarze. Niezbędne informacje do realizacji tych funkcjonalności zostaną pobrane z specjalnie stworzonego przeze mnie na potrzeby projektu API. 

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159140480-a30281ec-71ed-451b-8183-3ce8d285f39d.png">
</p>

### Podstrona produktów
Gdy klient kliknie wybrany przez siebie link w nawbarze, zostanie przekierowany do strony produktów. Zostanie wyswietlona strona z lista spełniających warunek produktów. Użytkownik będzie miał możliwość przefiltrowania listy w celu znalezienia porządanego towaru.

![Strona produktów](https://user-images.githubusercontent.com/80101842/159140486-6a746e3d-24d1-428a-bbe1-67e8fb001338.png)

### Podstrona produktu

Użytkownik po wybraniu z listy jednego towaru zostanie przekierowany do strony produktu.
Strona ta zawierać będzie opis towaru, jego cenę, rozmiar, pokazowe zdjęcia, mozliwość dodania
do listy życzeń oraz przycisk "Dodaj do koszyka".

![Strona produktu](https://user-images.githubusercontent.com/80101842/159140487-9dc36dac-57a1-4c81-aff9-90f374af8be8.png)

# Proces tworzenia projektu
Projekt będzie realizowany przy wykorzystaniu podstawowych narzędzi, służących zarówno do projektowania warstwy wizualnej jak i do kodowania strony internetowej. W trakcie pracy używam programów **Figma** oraz **Visual Studio Code**. Do kontroli wersji oprogramowania, standardowo skorzystałam z **Github**.

**Funkcjonalności**
- Logowanie/Rejestrowanie użytkownika
- Dodawanie/Usuwanie produktu z koszyka
- Zwiększanie/Zmniejszanie ilość produktów w koszyku
- Możliwość komentowania/polubienia przedmiotu
- Wyszukiwanie przedmiotu po nazwie
- Wyświetlenie ostatnio dodanych produktów
- Filtrowanie/Sortowanie po wadze/rozmiarze/marce
- Dezaktywacja konta użytkownika
- Zakup produktu


**Poczynione kroki**
- Stworzenie konceptu strony
- Stworzenie szablonu strony
- Inicjalizacja projektu i repozytorium
- Stworzenie struktury strony
- Wykorzystanie języka Javascript do stworzenia funkcjonalności strony
- Obsługa zdarzeń na stronie przy użyciu języka Javascript

**Technologie**
- REST API
- JavaScript
- HTML
- CSS
- GIT
- Figma
- MongoDB

## Aplikacja mobilna

### Rejestracja / Logowanie
W celu uruchomienia aplikacji należ w terminalu wpisać komendę npm install w celu zainstalowania niezbędnych dependencies do działania projektu. Następnie za pomocą npx react-native start uruchomić metro. W nowym oknie konsoli należy uruchomić polecenie npx react-native run-android. Stosując się do powyższej instrukcji aplikacja zacznie się uruchamiać. Jako pierwszy ukaże się ekran startowy aplikacji. Po kliknięciu przycisku "Get Started" pojawi się jeden z dwóch formularzy: lodowania lub rejestracji w zależnosci od tego czy dany użytkownik posiada konto w sklepie czy też nie.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141190-8cef3eb4-9750-4949-af47-6153ecf910ef.png">
</p>

### Home
Użytkownik po poprawnym zalogowaniu / rejestracji zostaje przekierowany do ekranu głównego aplikacji. Umieszczono na nim następujące elementy / funkcjonalności: wyszukiwanie, przejscie do koszyka, listę z kategoriami produktów, najnowsze produkty oraz bottom navabar umożliwiajacy przejście do listy zapisanych produktów, powiadomień i konta użytkownika.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141203-9e8e5487-42cf-4af6-965c-19c4fd65f394.png">
</p>

### Produkt

Po kliknięciu we wybrany przedmiot na ekranie głownym uzytkownik zostaje przekierowany do ekarnu produktu. Jego elementy to: zdjęcia produktu (przewijana za pomocą gestu lista), nazwa produktu, cena, mozliwość wyboru ilość sztuk, ocena towaru, recenzja wystawiona przez innych użytkoników, mozliwość dodania do zapisanych czy też dodania bezpośrednio do koszyka po naciśnięciu przycisku "Add to cart". 

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141218-cf2de5c7-7130-4863-8d2f-061ed7a7fdd3.png">
</p>

### Ulubione

Ekran ulubione zawiera listę polubioych przez użytkownika produktów. Może je usuwać oraz dodawać do koszyka.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141222-ef86c8d1-39e4-4811-80e2-4e7e4e396cf7.png">
</p>

### Koszyk

Zawiera listę produktów, które użytkownik zamierza kupić. Na dole ekranu znajduje się podsumowanie kwoty do zapłaty. Po naciśnięciu przycisku "Check out", następuje przekierowanie klienta do ekranu wyboru zapłaty i adresu wysyłki.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141205-0328d608-45cc-4cfb-93c9-b4ad20f5431e.png">
</p>

### Wybór dostawy

Klient wpisuje adres wysyłaki, wybiera opcję płatności oraz metodę wysyłki. Na dole ekranu znajduje się podsumowanie transakcji złozone z ceny towaru oraz kwoty za wysyłkę. Po kliknieciu przycisku "Submit order" użytkownik zostaje przekierowany do ekranu podziekowania za dokonanie zakupy w aplikacji.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141194-2ecacf13-0358-4200-a7f9-6f95d707a9f7.png">
</p>

### Dodawanie metody płotności

Ekran umożliwiający dodanie albo usunięcie metody płatności przez użytkownika.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141201-f310f2a5-2258-49c8-83c7-2fd494b1b06a.png">
</p>

### Dodawanie adresu wysyłki 

Ekran umożliwiający wprowadzenie do aplikacji danych odnośnie wysyłki zakupionego towaru. Są to: imie i nazwisko, adres zamieszkania, miasto, kraj, kod pocztowy, województwo.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141197-b5d574d2-d6c7-4a4c-907b-f8104768059e.png">
</p>

### Wybór metody płatności

Za pomocą tego ekranu użytkownik ma możliwość wybrania jednej formy płatności z wcześniej dodanych przez siebie metod zapłaty.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141209-0597283d-c9e8-4757-b92e-8548dfbdaf18.png">
</p>

### Podziękowanie

Użytkownik zostaje poinformowany o powodzeniu transakcji. Z tego ekranu ma mozliwość przeniesienia się do ekranu śledzenia przesyłki albo powrotu do ekranu startowego.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141213-f9f46ed9-6d9c-4fdc-bc88-f05c355c8e4b.png">
</p>

### Profil

Ekran przedstawiający konto użytkownika, jego zdjęcie profilowe (opcjonalnie), imię i nazwisko, adres email. Stąd klient ma możliwość przejścia do ekarnu moje zamówienia, adresu zakupu, metody płatności, dodanych przez siebie recenzji towarów oraz ustawień. Na ekranie jest ukazana również funkcjonalność wylogowania się z aplikacji.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141219-7a04fc1f-37b8-4d70-b13c-0edc908dda60.png">
</p>

### Zamówienia

Ekran pokazuje listę zamówień dokonanych przez użytkownika. Zaprezentowane zostały tutaj trzy zakładki: dostarczone (zamówienia dostarczone do odbiorcy), w trakcie realizacji oraz anulowane.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141227-85b80ebe-e7a5-4e5b-b0ba-3c047330c7ef.png">
</p>

### Adres dostawy

Ekran umożliwia wybór jednego z dodanych wcześniej adresów wysyłki lub dodanie nowego adresu w prawym, dolnym rogu.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141191-9749fefa-f5a3-47e0-aa22-1af751fa07dd.png">
</p>

### Oceny użytkownika

Zostały tu przedstawione recenzje wystawione przez uzytkownika odnośnie zakupionych przez niego towarów.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141211-4401c90f-e4fc-4a62-94ce-284516cb1fae.png">
</p>

### Recenzje użytkowników

Na tym ekranie zostały zaprezentowane recenzje na temat pojedyńczego towaru. Użytkownik może dodwać swój komentarz poprzez kliknięcie przycisku "Write a review".

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141220-5be3c49a-6e8f-46cd-a8b2-acaa296d24e0.png">
</p>

### Powiadomienia

Na ekraie pojawiają się najnowsze powiadomienia odnośnie najświeżyszch akcji podjętych przez klienta oraz generowane automatycznie przez aplikację takie jak na przykład promoacje czy kody rabatowe.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141215-f2006e22-fe03-4e69-8d87-3831af643318.png">
</p>

### Ustawienia

Ekran służący do personalizacji konta na przykład poprzez zmianę nazwy uzytkownika, hasła, wyłączenia lub włączenia niektórych powiadomień.

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159141225-08a70600-49b2-41af-a1b7-23fa6511ed9b.png">
</p>
