package cardPicker;

import shuffler.Deck;

import java.util.List;

public class Pickacard {
	public void cardPicker() {

		List fullDeck = Deck.shuffle();

		for (int i = 0; i <= 51; i++) {
			System.out.println(fullDeck.get(i));
		}
	}
}
