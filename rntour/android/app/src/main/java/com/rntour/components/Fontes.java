package com.rntour.components;

import android.content.Context;
import android.graphics.Typeface;
import androidx.appcompat.widget.AppCompatTextView;

import android.util.AttributeSet;

public class Fontes extends AppCompatTextView {

    public Fontes(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public Fontes(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public Fontes(Context context) {
        super(context);
        init();
    }

    public void init() {
        Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/DancingScript-Regular.ttf");
        setTypeface(tf ,Typeface.NORMAL);

    }
}


