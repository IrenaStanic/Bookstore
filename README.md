# Bookstore
Projecat je uradjen kao React aplikacija. Provider iz react-reduxa obavija App.js koji koristi BrowserRouter, Routes i Route kao putanju ka komponentama Login, Cart, Home, Details, Register i NotFound. Instalirane su udice useDispatch, useEffect, useSelector iz reacta tj react-reduxa. Koriscen je ToastContainer iz react-toastify. 
U folderu store nalazi se fajl store gde je importovan configureStore iz redux toolkit-a koji sadrzi reducere. U api fajlu, foldera store, nalazi se importovan axios za povezivanje rest api-ja sa mongoDB bazom. Folder reducer sadrzi fajlove authSlice, cartSlice i detailSlice. U authSlice-u su importovane createSlice i createAsyncThink iz redux toolkit-a. Asinhrone funkcije sluze za ulogovanje i registraciju, dok authSlice sardzi reducer sa metodama za setovanje korisnika i odjavljivanje istih. CartSlice sadzi funkcije vezane za dogadjaje u korpi. To su dodavanje u korpu, otvaranje i zatvaranje korpe, povecavanje i smanjivanje kolicine artikala u korpi, brisanje pojedinacnih artikala i cele korpe. DetailSlice je slice koji otvara komponentu Details i prikazuje njen sadrzaj.
Home stranica koristi udice useEffect i useState za preuzimanje api-ja preko axios-a kao promise. Komponenta BookCard pripada Home stranici i predstavlja izgled jednog artikla. Ovde je importovan Link iz react-router-dom koji vodi ka komponenti Details. Imamo i funkciju za dodavanje artikla u korpu.
Cart komponenta importuje reducere iz cartSlice-a i koristi ih za sve dogadjaje u korpi. Prikazuje izgled korpe, racuna cene dupliranih artikala i ukupnu cenu. 
Komponenta Header sadrzi navbar importovan iz React Bootstrap-a, MDBNavBarLink-ove koje vode ka stranicama Login i Register, kao i link za otvaranje korpe koji prikazuje broj artikala u korpi.
Stranica NotFound sadrzi sliku koja ce se prikazati u slucaju da ne dodje do konekcije sa api-jem. 
Projekat je stilizovan CSS-om i SCSS-om. Primenjene su @mixin direktive koje se koriste na celoj veb stranici.
