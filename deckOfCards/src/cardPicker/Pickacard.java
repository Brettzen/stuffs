package cardPicker;

import shuffler.Deck;

import java.util.List;

public class Pickacard {
	public static void cardPicker() {

		List fullDeck = Deck.shuffle();

		for (int i = 0; i <= 51; i++) {
			System.out.println(fullDeck.get(i));
		}
	}
}
