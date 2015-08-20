package shuffler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Deck {
	public static List<String> getDeck() {
		List<Integer> shuffler = new ArrayList<Integer>();
		List<String> deckNumbers = new ArrayList<String>(
				Arrays.asList("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"));
		List<String> deckSuit = new ArrayList<String>(
				Arrays.asList(" of Hearts", " of Diamonds", " of Spades", " of Clubs"));

		final List<String> deckComplete = deckSuit.stream()
				.flatMap((suit) -> deckNumbers.stream().map((number) -> number + suit)).collect(Collectors.toList());

		return deckComplete;
	}

	public static List<String> shuffle() {
		final List<String> deck = getDeck();
		final List<Integer> firstHalf = new ArrayList<>();
		final List<Integer> secondHalf = new ArrayList<>();
		final List<String> reshuffledDeck = new ArrayList<>();

		for (int i = 0; i <= 51; i++) {
			if (i < 26) {
				firstHalf.add(i);
			} else {
				secondHalf.add(i);
			}
		}

		final List<String> firstHalfOfDeck = firstHalf.stream().map(deck::get).collect(Collectors.toList());
		final List<String> secondHalfOfDeck = secondHalf.stream().map(deck::get).collect(Collectors.toList());
		
		int halfDeckChooser = 0;
		int j = 0;
		for(int i = 0; i < deck.size(); i++) {
			if (halfDeckChooser == 0) {
				reshuffledDeck.add(firstHalfOfDeck.get(j));
				halfDeckChooser = 1;
			}
			else if (halfDeckChooser == 1) {
				reshuffledDeck.add(secondHalfOfDeck.get(j));
				halfDeckChooser = 0;
				j++;
			}
		}

//		final List<String> reshuffledDeck = deck.stream().forEach((card) -> firstHalfOfDeck.get(card)).collect(Collectors.toList());

		return reshuffledDeck;
	}
}
