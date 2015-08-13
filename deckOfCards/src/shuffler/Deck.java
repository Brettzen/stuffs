package shuffler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Deck
{
    public static List getDeck()
    {
        Random rand = new Random();

        List<Integer> shuffler = new ArrayList<Integer>();
        List<String> deckNumbers =
                new ArrayList<String>(Arrays.asList("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                        "Jack", "Queen", "King"));
        List<String> deckSuit =
                new ArrayList<String>(
                        Arrays.asList(" of Hearts", " of Diamonds", " of Spades", " of Clubs"));

        // Using Streams :)
        final List<String> deckComplete = deckSuit.stream().flatMap((suit) -> deckNumbers.stream().map(
                (number) -> number + suit)).collect(Collectors.toList());

        // Implement Shuffle some other way...
        // Collections.shuffle(deckComplete);

        while (shuffler.size() != 52) {
            int randomizer = rand.nextInt((52 - 1) + 1);
            System.out.println(randomizer);
            if (shuffler.indexOf(randomizer) == -1) {
                shuffler.add(randomizer);
            }
        }

        final List<String> shuffledDeck = shuffler.stream().map(deckComplete::get).collect(Collectors.toList());

        return shuffledDeck;
    }

    public List<String> reshuffle() {
        List<String> deck = Deck.getDeck();
        List<Integer> firstHalf = new ArrayList<>();
        List<Integer> secondHalf = new ArrayList<>();

        for (int i = 0; i <= 52; i++) {
            if (i < 26) {
                firstHalf.add(i);
            } else {
                secondHalf.add(i);
            }
        }

        final List<String> firstHalfOfDeck = firstHalf.stream().map(deck::get).collect(Collectors.toList());
        final List<String> secondHalfOfDeck = secondHalf.stream().map(deck::get).collect(Collectors.toList());

        List<String> reshuffledDeck = new ArrayList<>(firstHalfOfDeck);
        reshuffledDeck.addAll(secondHalfOfDeck);

        System.out.println(reshuffledDeck);

        return reshuffledDeck;
    }
}
