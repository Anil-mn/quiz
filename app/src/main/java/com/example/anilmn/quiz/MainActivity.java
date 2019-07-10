package com.example.anilmn.quiz;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView webView=(WebView)findViewById(R.id.webview);
       webView.getSettings().setJavaScriptEnabled(true);
       webView.setWebChromeClient(new WebChromeClient());
       webView.loadUrl("file:///android_asset/quiz/quiz.html");
    }
}
