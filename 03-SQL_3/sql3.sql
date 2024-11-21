--FUNCTIONS
SELECT count(*) from album; -- count(*) tavsiye edilmez
-- kaç adet fatura keislmiş
SELECT count(total) from invoice;
SELECT count(BillingState) from invoice; -- null ları saymaz
-- MIN MAX AVG 
SELECT min(Total) from invoice;
SELECT max(Total) from invoice;
SELECT avg(Total) from invoice;

SELECT min(Total) as EnDusuk, max(Total) as EnYuksek, avg(Total) OrtalamaFatura 
FROM invoice;
-- ROUND
SELECT round(avg(Total)) from invoice;
SELECT round(avg(Total),2) from invoice;

-- LENGHT
SELECT length(BillingAddress),BillingAddress FROM invoice;

-- GROUP by
SELECT count(*) FROM invoice WHERE BillingCountry="Germany";
SELECT count(*) FROM invoice GROUP by BillingCountry;

-- having odev


-- her bir ülke için kesilen fatura adedi
SELECT BillingCountry, count(*) as kesilenFaturaAdedi 
FROM invoice GROUP by BillingCountry;

SELECT max(kesilenFaturaAdedi) FROM (SELECT BillingCountry, count(*) as kesilenFaturaAdedi 
FROM invoice GROUP by BillingCountry) ;
-- en fazla fatura kesilen ülke 

SELECT BillingCountry, max(Total) FROM invoice GROUP by BillingCountry;
SELECT BillingCountry, max(Total), min(Total) FROM invoice GROUP by BillingCountry;
-- CRUD create READ update delete
-- CRUD create update delete   veri üzerinde değişiklik yapıyor
-- CREATE ifaddesi db yapısı üzerinde kullanılır
-- INSERT ifadesi veri üzerinde
--INSERT INTO hangi alana hangi veriler
--INSERT INTO tablename(fields) VALUES(...,....)
INSERT INTO Genre(GenreId,Name) VALUES(26,"arabesk");
INSERT INTO Genre VALUES(27,"Halk"); -- db deki tablo field sırası ne ise on sıra ekler
INSERT INTO Genre(Name,GenreId) VALUES("sanat",28);
INSERT INTO Genre(GenreId) VALUES(30);
-- n adet INSERT
INSERT INTO Genre 
VALUES
	(31,"turk pop"),
	(32,"turk Jazz"),
	(33,"anadolu rock");

-- UPDATE
--UPDATE Tablename SET filedname=newdata  WHERE condition
--select * from Genre  WHERE GenreId=30;
UPDATE Genre SET Name="yeni tür" WHERE GenreId=30;  

--DELETE   dikkat
DELETE FROM Genre WHERE GenreId=30; 
